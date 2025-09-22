"use client";

import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import ReactFlow, {
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
} from "reactflow";
import dagre from "dagre";
import styled from "styled-components";
import CustomNode from "../components/CustomNode";
import CustomEdge from "../components/CustomEdge";
import { ThemeProvider } from "../contexts/ThemeContext";
import { lightTheme } from "../theme/theme";
import "reactflow/dist/style.css";
import { rawNodes, rawEdges } from "../_lib/graphContent";
import { MINIMAL_DELTA } from "../constants/movement";
import {
  saveNodeChanges,
  applyStoredChanges,
  exportUpdatedGraphContent,
} from "../utils/persistence";

const FlowContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

// Search UI
const SearchBarWrapper = styled.div`
  position: fixed;
  top: 16px;
  left: 20px;
  z-index: 1100;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: min(540px, 90vw);
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px 12px;
  font-size: 14px;
  border: 1px solid #d0d5dd;
  border-radius: 8px;
  outline: none;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(16, 24, 40, 0.06);
  &:focus { border-color: #0066ff; box-shadow: 0 0 0 3px rgba(0, 102, 255, 0.15); }
`;

const SearchDropdown = styled.div`
  position: relative;
  width: 100%;
`;

const SearchResultsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: #ffffff;
  border: 1px solid #d0d5dd;
  border-radius: 10px;
  box-shadow: 0 8px 24px rgba(16, 24, 40, 0.18);
  padding: 6px 0;
  max-height: 260px;
  overflow-y: auto;
  -ms-overflow-style: none; /* IE/Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar { display: none; width: 0; height: 0; }
`;

const SearchResultItem = styled.button`
  display: block;
  width: 100%;
  text-align: left;
  background: transparent;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  font-size: 14px;
  color: #111827;
  &:hover { background: #f2f4f7; }
`;

const ExportButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  padding: 10px 20px;
  background: #0066ff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background: #0052cc;
  }
`;

const ResetButton = styled.button`
  position: fixed;
  top: 20px;
  right: 160px;
  z-index: 1000;
  padding: 10px 20px;
  background: #dc3545;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background: #c82333;
  }
`;

const ImportButton = styled.button`
  position: fixed;
  top: 20px;
  right: 300px;
  z-index: 1000;
  padding: 10px 20px;
  background: #17a2b8;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background: #138496;
  }
`;

const UndoButton = styled.button`
  position: fixed;
  top: 20px;
  right: 460px;
  z-index: 1000;
  padding: 10px 20px;
  background: #6c757d;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background: #5a6268;
  }
`;


const ModalBackdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
`;

const ModalCard = styled.div`
  width: min(900px, 92vw);
  max-height: 80vh;
  overflow: auto;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  padding: 20px;
`;

const ModalTitle = styled.h3`
  margin-bottom: 12px;
`;

const ModalTextarea = styled.textarea`
  width: 100%;
  height: 320px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 12px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  resize: vertical;
`;

const ModalActions = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 14px;
  justify-content: flex-end;
`;

const Primary = styled.button`
  background: #0066ff;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px 14px;
  cursor: pointer;
  &:hover { background: #0052cc; }
`;

const Secondary = styled.button`
  background: #e5e7eb;
  color: #111827;
  border: none;
  border-radius: 6px;
  padding: 8px 14px;
  cursor: pointer;
`;

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeWidth = 320;
const nodeHeight = 300; // Increased to make vertical layout more obvious
const theSolutionWidth = 600;
const theSolutionHeight = 400;

// layout-функция
function getLayoutedElements(nodes, edges, direction = "TB", ignoreManualPositions = false) {
  console.log("=== LAYOUT DEBUG ===");
  console.log("Layout direction:", direction);

  dagreGraph.setGraph({ rankdir: direction, nodesep: 400, ranksep: 200 });
  console.log("Dagre graph settings:", dagreGraph.graph());

  nodes.forEach((n) => {
    const isTheSolution = n.id === "TheSolution";
    const width = isTheSolution ? theSolutionWidth : nodeWidth;
    const height = isTheSolution ? theSolutionHeight : nodeHeight;
    dagreGraph.setNode(n.id, { width, height });
  });
  edges.forEach((e) => dagreGraph.setEdge(e.source, e.target));

  dagre.layout(dagreGraph);

  console.log("Raw Dagre positions (first 5 nodes):");
  nodes.slice(0, 5).forEach((n) => {
    const dagreNode = dagreGraph.node(n.id);
    console.log(`${n.id}: x=${dagreNode.x}, y=${dagreNode.y}`);
  });

  const laidOutNodes = nodes.map((n) => {
    const isTheSolution = n.id === "TheSolution";
    const width = isTheSolution ? theSolutionWidth : nodeWidth;
    const height = isTheSolution ? theSolutionHeight : nodeHeight;

    // Use manual position if present, otherwise use Dagre
    let position;
    if (!ignoreManualPositions &&
      n.position &&
      typeof n.position.x === "number" &&
      typeof n.position.y === "number"
    ) {
      position = n.position;
    } else {
      const { x, y } = dagreGraph.node(n.id);
      position = {
        x: x - width / 2,
        y: y - height / 2,
      };
    }

    return {
      ...n,
      type: "custom",
      position,
      width,
      height,
    };
  });

  console.log("Final node positions (first 5 nodes):");
  laidOutNodes.slice(0, 5).forEach((n) => {
    console.log(
      `${n.id}: x=${n.position.x}, y=${
        n.position.y
      }, hasManualPos=${!!n.position}`
    );
  });

  // Find TheSolution and show its position
  const theSolutionNode = laidOutNodes.find((n) => n.id === "TheSolution");
  if (theSolutionNode) {
    console.log("TheSolution position:", theSolutionNode.position);
  }

  // Add node data to edges for custom styling
  const laidOutEdges = edges.map((edge) => {
    const sourceNode = laidOutNodes.find((n) => n.id === edge.source);
    const targetNode = laidOutNodes.find((n) => n.id === edge.target);

    return {
      ...edge,
      type: "custom",
      data: {
        sourceNode,
        targetNode,
      },
    };
  });

  console.log("=== END LAYOUT DEBUG ===");
  return { nodes: laidOutNodes, edges: laidOutEdges };
}

const nodeTypes = { custom: CustomNode };
const edgeTypes = { custom: CustomEdge };

export default function LectureTree() {
  const reactFlowRef = useRef();
  const reactFlowInstanceRef = useRef(null);
  const containerRef = useRef(null);
  const historyRef = useRef([]); // stack of {nodes, edges}
  const [{ nodes: initNodes, edges: initEdges }, setLayout] = useState({
    nodes: [],
    edges: [],
  });
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [selectedNodes, setSelectedNodes] = useState([]);
  const [isNodeDragging, setIsNodeDragging] = useState(false);
  const [isSelectMode, setIsSelectMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Hold-to-select with Shift
  useEffect(() => {
    const down = (e) => {
      if (e.key === "Shift") setIsSelectMode(true);
    };
    const up = (e) => {
      if (e.key === "Shift") setIsSelectMode(false);
    };
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
    };
  }, []);
  const hasCenteredRef = useRef(false);
  const [showImport, setShowImport] = useState(false);
  const [importText, setImportText] = useState(`[
    {
      "id": "A",
      "data": { "section": "demo", "grade": "7", "number": 1, "problems": [] },
      "position": { "x": 0, "y": 0 },
      "width": 320,
      "height": 300
    },
    {
      "id": "B",
      "data": { "section": "demo", "grade": "7", "number": 2, "problems": [] },
      "position": { "x": 500, "y": 300 },
      "width": 320,
      "height": 300
    }
  ]`);
  const [importError, setImportError] = useState("");
  const prevNodesBeforeDragRef = useRef(null);

  // Compute graph bounds (min/max extents) based on node positions and sizes
  const computeGraphBounds = useCallback((ns) => {
    if (!ns || ns.length === 0) return null;
    let minX = Infinity,
      minY = Infinity,
      maxX = -Infinity,
      maxY = -Infinity;
    ns.forEach((n) => {
      const x1 = n.position.x;
      const y1 = n.position.y;
      const x2 = n.position.x + (n.width || nodeWidth);
      const y2 = n.position.y + (n.height || nodeHeight);
      if (x1 < minX) minX = x1;
      if (y1 < minY) minY = y1;
      if (x2 > maxX) maxX = x2;
      if (y2 > maxY) maxY = y2;
    });
    return { minX, minY, maxX, maxY, cx: (minX + maxX) / 2, cy: (minY + maxY) / 2 };
  }, []);

  const handleBlockWhileDragging = useCallback((e) => {
    if (isNodeDragging) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, [isNodeDragging]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const blocker = (e) => {
      if (isNodeDragging) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
    const opts = { passive: false, capture: true };
    el.addEventListener('wheel', blocker, opts);
    el.addEventListener('touchmove', blocker, opts);
    // Safari-specific pinch events
    el.addEventListener('gesturestart', blocker, opts);
    el.addEventListener('gesturechange', blocker, opts);
    return () => {
      el.removeEventListener('wheel', blocker, opts);
      el.removeEventListener('touchmove', blocker, opts);
      el.removeEventListener('gesturestart', blocker, opts);
      el.removeEventListener('gesturechange', blocker, opts);
    };
  }, [isNodeDragging]);

  // Always use Dagre layout, ignore manual positions for now
  useEffect(() => {
    // const nodesWithStoredChanges = applyStoredChanges(rawNodes);
    const { nodes: ln, edges: le } = getLayoutedElements(
      rawNodes, // Use raw nodes without stored changes
      rawEdges,
      "TB"
    );
    setLayout({ nodes: ln, edges: le });
  }, []);

  useEffect(() => {
    setNodes(initNodes);
    setEdges(initEdges);
  }, [initNodes, initEdges]);

  useEffect(() => {
    if (!hasCenteredRef.current && nodes.length > 0 && reactFlowInstanceRef.current) {
      // Use fitView to ensure the whole graph is visible even with large coordinates
      requestAnimationFrame(() => {
        try {
          reactFlowInstanceRef.current.fitView({ padding: 0.2, duration: 800, includeHiddenNodes: true });
          // Optionally zoom out a bit more for a "far away" start
          const current = reactFlowInstanceRef.current.getZoom?.() ?? 1;
          const target = Math.max(0.3, current * 0.9);
          if (target < current && reactFlowInstanceRef.current.zoomTo) {
            reactFlowInstanceRef.current.zoomTo(target, { duration: 400 });
          }
        } catch (e) {
          // fallback: do nothing
        }
        hasCenteredRef.current = true;
      });
    }
  }, [nodes]);

  // Compute search results and dimming
  const searchResults = useMemo(() => {
    const q = (searchTerm || "").trim().toLowerCase();
    if (!q) return [];
    return nodes
      .filter((n) => {
        const idTxt = n.id?.toLowerCase?.() || "";
        const secTxt = (n.data?.section || "").toLowerCase();
        return idTxt.includes(q) || secTxt.includes(q);
      })
      .slice(0, 20);
  }, [nodes, searchTerm]);

  const dimmedNodes = useMemo(() => {
    const q = (searchTerm || "").trim().toLowerCase();
    const hasSearch = q.length > 0;
    return nodes.map((n) => {
      const idMatch = n.id?.toLowerCase?.().includes(q);
      const sectionMatch = (n.data?.section || "").toLowerCase().includes(q);
      const matches = !hasSearch || idMatch || sectionMatch;
      const opacity = hasSearch && !matches ? 0.6 : 1;
      return { ...n, style: { ...(n.style || {}), opacity, transition: "opacity 0.2s ease" } };
    });
  }, [nodes, searchTerm]);

  const dimmedEdges = useMemo(() => {
    const opacities = new Map(dimmedNodes.map((n) => [n.id, n.style?.opacity ?? 1]));
    const hasSearch = (searchTerm || "").trim().length > 0;
    return edges.map((e) => {
      const so = opacities.get(e.source) ?? 1;
      const to = opacities.get(e.target) ?? 1;
      const dim = hasSearch && (so < 1 || to < 1);
      return { ...e, style: { ...(e.style || {}), opacity: dim ? 0.6 : 1 } };
    });
  }, [edges, dimmedNodes, searchTerm]);

  const centerOnNode = useCallback((id) => {
    const inst = reactFlowInstanceRef.current;
    if (!inst || !id) return;
    try {
      const rfNode = inst.getNode?.(id);
      const n = rfNode || nodes.find((x) => x.id === id);
      if (!n) return;
      const cx = n.position.x + (n.width || nodeWidth) / 2;
      const cy = n.position.y + (n.height || nodeHeight) / 2;
      inst.setCenter?.(cx, cy, { zoom: 1.0, duration: 600 });
    } catch (_) {}
  }, [nodes]);

  const pushHistorySnapshot = useCallback(() => {
    if (!nodes || nodes.length === 0) return;
    const snapshot = {
      nodes: JSON.parse(JSON.stringify(nodes)),
      edges: JSON.parse(JSON.stringify(edges)),
    };
    historyRef.current.push(snapshot);
  }, [nodes, edges]);

  const snapToGrid = useCallback((position) => {
    return {
      x: Math.round(position.x / MINIMAL_DELTA) * MINIMAL_DELTA,
      y: Math.round(position.y / MINIMAL_DELTA) * MINIMAL_DELTA,
    };
  }, []);

  const snapSizeToGrid = useCallback((width, height, nodeId) => {
    // Enforce fixed dimensions
    const isTheSolution = nodeId === "TheSolution";
    if (isTheSolution) {
      return {
        width: theSolutionWidth,
        height: theSolutionHeight,
      };
    }
    return {
      width: nodeWidth,
      height: nodeHeight,
    };
  }, []);

  // Handle node changes including position updates
  const onNodesChange = useCallback(
    (changes) => {
      const quantizedChanges = changes.map((change) => {
        if (change.type === "position" && change.position) {
          return {
            ...change,
            position: snapToGrid(change.position),
          };
        }
        if (
          change.type === "dimensions" &&
          (change.dimensions || change.resizing === false)
        ) {
          const node = nodes.find((n) => n.id === change.id);
          if (node && change.dimensions) {
            const snappedSize = snapSizeToGrid(
              change.dimensions.width,
              change.dimensions.height,
              change.id
            );
            return {
              ...change,
              dimensions: snappedSize,
            };
          }
        }
        return change;
      });

      const updatedNodes = applyNodeChanges(quantizedChanges, nodes);
      setNodes(updatedNodes);

      // Save changes to localStorage
      saveNodeChanges(updatedNodes);
    },
    [snapToGrid, snapSizeToGrid, nodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const onNodeClick = useCallback((event, node) => {
    setSelectedNodes((prev) => {
      const multi = isSelectMode || event.shiftKey;
      if (multi) {
        // Toggle selection
        if (prev.includes(node.id)) {
          return prev.filter((id) => id !== node.id);
        } else {
          return [...prev, node.id];
        }
      }
      // Select only this node
      return [node.id];
    });
  }, [isSelectMode]);

  const onPaneClick = useCallback(() => {
    if (!isSelectMode) setSelectedNodes([]);
  }, [isSelectMode]);

  const handleResetLayout = useCallback(() => {
    pushHistorySnapshot();
    // Clear localStorage and force re-layout
    localStorage.removeItem("graph-node-changes");
    hasCenteredRef.current = false;
    const { nodes: ln, edges: le } = getLayoutedElements(
      rawNodes,
      rawEdges,
      "TB"
    );
    setLayout({ nodes: ln, edges: le });
    console.log("Layout reset - cleared manual positions");
  }, [pushHistorySnapshot]);

  const handleExportGraph = useCallback(() => {
    const exportedContent = exportUpdatedGraphContent(nodes);
    navigator.clipboard.writeText(exportedContent).then(() => {
      alert("Graph content copied to clipboard!");
    });
  }, [nodes]);

  const alignSelectedNodes = useCallback(
    (alignmentType) => {
      if (selectedNodes.length < 2) return;

      const selectedNodeObjects = nodes.filter((node) =>
        selectedNodes.includes(node.id)
      );
      const nodeIds = selectedNodeObjects.map((node) => node.id);
      const positions = selectedNodeObjects.map((node) => node.position);

      // Save snapshot before applying alignment
      pushHistorySnapshot();

      let newPositions = [];

      switch (alignmentType) {
        case "verticalGap":
          // Sort by current y
          const sortedByY = [...selectedNodeObjects].sort(
            (a, b) => a.position.y - b.position.y
          );
          const minY = sortedByY[0].position.y;
          const avgX =
            positions.reduce((sum, pos) => sum + pos.x, 0) / positions.length;
          newPositions = sortedByY.map((node, index) => ({
            id: node.id,
            position: { x: avgX, y: minY + index * 200 },
          }));
          break;
        case "horizontalGap":
          // Sort by current x
          const sortedByX = [...selectedNodeObjects].sort(
            (a, b) => a.position.x - b.position.x
          );
          const minX = sortedByX[0].position.x;
          const avgY =
            positions.reduce((sum, pos) => sum + pos.y, 0) / positions.length;
          newPositions = sortedByX.map((node, index) => ({
            id: node.id,
            position: { x: minX + index * 500, y: avgY },
          }));
          break;
        case "strictVertical":
          const strictAvgX =
            positions.reduce((sum, pos) => sum + pos.x, 0) / positions.length;
          newPositions = selectedNodeObjects.map((node) => ({
            id: node.id,
            position: { ...node.position, x: strictAvgX },
          }));
          break;
        case "strictHorizontal":
          const strictAvgY =
            positions.reduce((sum, pos) => sum + pos.y, 0) / positions.length;
          newPositions = selectedNodeObjects.map((node) => ({
            id: node.id,
            position: { ...node.position, y: strictAvgY },
          }));
          break;
        default:
          return;
      }

      // Update the nodes
      const updatedNodes = nodes.map((node) => {
        const newPos = newPositions.find((p) => p.id === node.id);
        if (newPos) {
          return {
            ...node,
            position: newPos.position,
          };
        }
        return node;
      });

      setNodes(updatedNodes);
      saveNodeChanges(updatedNodes);
    },
    [selectedNodes, nodes, setNodes, pushHistorySnapshot]
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      // alignment shortcuts for 2+ selected
      if (selectedNodes.length >= 2) {
        if (e.shiftKey && e.key === "V") {
          alignSelectedNodes("verticalGap");
          e.preventDefault();
          return;
        } else if (e.shiftKey && e.key === "H") {
          alignSelectedNodes("horizontalGap");
          e.preventDefault();
          return;
        } else if (e.altKey && e.key === "V") {
          alignSelectedNodes("strictVertical");
          e.preventDefault();
          return;
        } else if (e.altKey && e.key === "H") {
          alignSelectedNodes("strictHorizontal");
          e.preventDefault();
          return;
        }
      }

      // arrow-key nudging for 1+ selected
      if (selectedNodes.length >= 1) {
        const step = e.shiftKey ? MINIMAL_DELTA * 5 : MINIMAL_DELTA;
        let dx = 0,
          dy = 0;
        if (e.key === "ArrowUp") dy = -step;
        else if (e.key === "ArrowDown") dy = step;
        else if (e.key === "ArrowLeft") dx = -step;
        else if (e.key === "ArrowRight") dx = step;
        if (dx !== 0 || dy !== 0) {
          e.preventDefault();
          // Save snapshot for undo
          pushHistorySnapshot();
          const updated = nodes.map((n) => {
            if (!selectedNodes.includes(n.id)) return n;
            const newPos = snapToGrid({
              x: (n.position?.x ?? 0) + dx,
              y: (n.position?.y ?? 0) + dy,
            });
            return { ...n, position: newPos };
          });
          setNodes(updated);
          saveNodeChanges(updated);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedNodes, nodes, setNodes, alignSelectedNodes, pushHistorySnapshot, snapToGrid]);

  const nodesWithSelection = nodes.map((node) => ({
    ...node,
    selected: selectedNodes.includes(node.id),
  }));

  const displayNodesWithSelection = useMemo(() => {
    const byId = new Map(dimmedNodes.map((n) => [n.id, n]));
    return nodesWithSelection.map((n) => {
      const dimmed = byId.get(n.id) || n;
      return { ...dimmed, selected: n.selected };
    });
  }, [nodesWithSelection, dimmedNodes]);

  // Handle drag snapshots
  const onNodeDragStart = useCallback(() => {
    prevNodesBeforeDragRef.current = JSON.parse(JSON.stringify(nodes));
    setIsNodeDragging(true);
  }, [nodes]);

  const onNodeDragStop = useCallback(() => {
    setIsNodeDragging(false);
    if (prevNodesBeforeDragRef.current) {
      historyRef.current.push({
        nodes: prevNodesBeforeDragRef.current,
        edges: JSON.parse(JSON.stringify(edges)),
      });
      prevNodesBeforeDragRef.current = null;
    }
  }, [edges]);

  const handleOpenImport = useCallback(() => {
    setImportError("");
    setShowImport(true);
  }, []);

  const handleCancelImport = useCallback(() => {
    setShowImport(false);
  }, []);

  const sanitizeIncomingNodes = useCallback((arr) => {
    return arr
      .filter((n) => n && typeof n.id === "string" && n.id.trim().length > 0)
      .map((n) => {
        const isTheSolution = n.id === "TheSolution";
        const width = n.width ?? (isTheSolution ? theSolutionWidth : nodeWidth);
        const height = n.height ?? (isTheSolution ? theSolutionHeight : nodeHeight);
        const position = n.position && typeof n.position.x === "number" && typeof n.position.y === "number"
          ? n.position
          : { x: 0, y: 0 };
        return {
          id: n.id,
          data: n.data ?? { section: "", grade: "", number: 0, problems: [] },
          position,
          width,
          height,
          type: "custom",
        };
      });
  }, []);

  const handleApplyImport = useCallback(() => {
    try {
      setImportError("");

      // Accept either a plain JSON array or the exact output from Export Graph:
      //   export const rawNodes = [...];
      const text = importText.trim();
      let parsed;
      try {
        parsed = JSON.parse(text);
      } catch {
        const match = text.match(/export\s+const\s+rawNodes\s*=\s*(\[[\s\S]*\]);?/);
        if (match && match[1]) {
          parsed = JSON.parse(match[1]);
        }
      }

      if (!Array.isArray(parsed) || parsed.length === 0) {
        setImportError(
          "Ожидается непустой JSON-массив или строка вида `export const rawNodes = [...]`"
        );
        return;
      }

      const newRawNodes = sanitizeIncomingNodes(parsed);
      if (newRawNodes.length === 0) {
        setImportError("После валидации не осталось корректных узлов");
        return;
      }
      // filter edges to only those whose nodes exist
      const allowed = new Set(newRawNodes.map((n) => n.id));
      const filteredEdges = rawEdges.filter(
        (e) => allowed.has(e.source) && allowed.has(e.target)
      );

      // Save snapshot before replacing layout
      pushHistorySnapshot();

      const { nodes: ln, edges: le } = getLayoutedElements(
        newRawNodes,
        filteredEdges,
        "TB"
      );
      hasCenteredRef.current = false; // trigger recenter on next render
      setSelectedNodes([]);
      setLayout({ nodes: ln, edges: le });
      setShowImport(false);
    } catch (err) {
      setImportError(`Ошибка парсинга: ${err.message}`);
    }
  }, [importText, sanitizeIncomingNodes, pushHistorySnapshot]);

  const handleUndo = useCallback(() => {
    const prev = historyRef.current.pop();
    if (!prev) return;
    hasCenteredRef.current = false;
    setSelectedNodes([]);
    setLayout({ nodes: prev.nodes, edges: prev.edges });
  }, []);

  return (
    <ThemeProvider theme={lightTheme}>
      <FlowContainer
        ref={containerRef}
        onWheelCapture={handleBlockWhileDragging}
        onTouchMoveCapture={handleBlockWhileDragging}
      >
        <UndoButton onClick={handleUndo}>Undo</UndoButton>
        {/* Search UI */}
        <SearchBarWrapper>
          <SearchInput
            placeholder="Поиск узлов..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setTimeout(() => setIsSearchFocused(false), 150)}
          />
          {isSearchFocused && searchTerm.trim() && (
            <SearchDropdown>
              <SearchResultsContainer>
                {searchResults.length > 0 ? (
                  searchResults.map((n) => (
                    <SearchResultItem key={n.id} onMouseDown={() => centerOnNode(n.id)}>
                      {n.id}
                      {n.data?.section ? (
                        <span style={{ color: "#475467" }}>
                          {"  ·  "}
                          {n.data.section}
                        </span>
                      ) : null}
                    </SearchResultItem>
                  ))
                ) : (
                  <div style={{ padding: "8px 12px", color: "#475467" }}>Ничего не найдено</div>
                )}
              </SearchResultsContainer>
            </SearchDropdown>
          )}
        </SearchBarWrapper>
        <ImportButton onClick={handleOpenImport}>Import Nodes</ImportButton>
        <ExportButton onClick={handleExportGraph}>Export Graph</ExportButton>
        <ResetButton onClick={handleResetLayout}>Reset Layout</ResetButton>
        <ReactFlow
          ref={reactFlowRef}
          onInit={(instance) => {
            reactFlowInstanceRef.current = instance;
          }}
          nodes={displayNodesWithSelection}
          edges={dimmedEdges}
          panOnScroll={false}
          zoomOnScroll={!isNodeDragging}
          zoomOnPinch={!isNodeDragging}
          zoomOnDoubleClick={false}
          preventScrolling={true}
          onNodeDragStart={onNodeDragStart}
          onNodeDragStop={onNodeDragStop}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onNodeClick={onNodeClick}
          onPaneClick={onPaneClick}
          nodesDraggable={true}
          nodesConnectable={false}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          panOnDrag={true}
          autoPanOnNodeDrag={false}
          selectionOnDrag={false}
          minZoom={0.1}
          maxZoom={2}
          style={{ backgroundColor: "#EAEAE8" }}
        >
          <Controls />
          <Background variant="dots" bgColor="red" color="transparent" />
        </ReactFlow>
        {showImport && (
          <ModalBackdrop onClick={handleCancelImport}>
            <ModalCard onClick={(e) => e.stopPropagation()}>
              <ModalTitle>Вставьте JSON-массив rawNodes или строку вида: export const rawNodes = [...];</ModalTitle>
              <ModalTextarea
                value={importText}
                onChange={(e) => setImportText(e.target.value)}
                spellCheck={false}
              />
              {importError && (
                <div style={{ color: "#b91c1c", marginTop: 8 }}>{importError}</div>
              )}
              <ModalActions>
                <Secondary onClick={handleCancelImport}>Отмена</Secondary>
                <Primary onClick={handleApplyImport}>Импортировать</Primary>
              </ModalActions>
            </ModalCard>
          </ModalBackdrop>
        )}
      </FlowContainer>
    </ThemeProvider>
  );
}
