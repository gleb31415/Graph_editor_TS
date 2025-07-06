"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import ReactFlow, {
  Controls,
  applyNodeChanges,
  applyEdgeChanges,
} from "reactflow";
import dagre from "dagre";
import { useTheme } from "../contexts/ThemeContext";

// Custom background with squares
function CustomBackground({ offsetX = 0, offsetY = 0, zoom = 1 }) {
  const theme = useTheme();
  const abbey200 = theme.colors.abbey["200"] || "#ced1d3";
  const abbey800 = theme.colors.abbey["800"] || "#424448";
  // Increase pattern size and gap by 4x
  const size = 128;
  const square = 4;

  // Reverse zoom logic: scale pattern with zoom (not 1/zoom)
  // So zoom in -> squares get larger, zoom out -> squares get smaller
  const patternTransform = `translate(${-offsetX}, ${-offsetY}) scale(${zoom})`;

  return (
    <svg
      width="100%"
      height="100%"
      style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none", background: abbey200 }}
    >
      <defs>
        <pattern
          id="squares"
          width={size}
          height={size}
          patternUnits="userSpaceOnUse"
          patternTransform={patternTransform}
        >
          <rect x="0" y="0" width={square} height={square} fill={abbey800} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#squares)" />
    </svg>
  );
}
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

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeWidth = 320;
const nodeHeight = 300; // Increased to make vertical layout more obvious
const theSolutionWidth = 600;
const theSolutionHeight = 400;

// layout-функция
function getLayoutedElements(nodes, edges, direction = "TB") {
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
    if (
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
  // Track ReactFlow viewport transform
  const [viewport, setViewport] = useState({ x: 0, y: 0, zoom: 1 });
  const reactFlowRef = useRef();
  const [{ nodes: initNodes, edges: initEdges }, setLayout] = useState({
    nodes: [],
    edges: [],
  });
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [selectedNodes, setSelectedNodes] = useState([]);

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
    if (nodes.length > 0 && reactFlowRef.current) {
      const theSolutionNode = nodes.find((node) => node.id === "TheSolution");
      if (theSolutionNode) {
        setTimeout(() => {
          const viewportWidth = window.innerWidth;
          const viewportHeight = window.innerHeight;

          // Set zoom to show more of the vertical layout
          const zoom = 0.6; // Lower zoom to see more nodes

          const { setCenter } = reactFlowRef.current;
          setCenter(
            theSolutionNode.position.x + theSolutionWidth / 2,
            theSolutionNode.position.y + theSolutionHeight / 2 + 200, // Offset down a bit
            { zoom, duration: 1000 }
          );
        }, 100);
      }
    }
  }, [nodes]);

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
      if (event.shiftKey) {
        // Toggle selection
        if (prev.includes(node.id)) {
          return prev.filter((id) => id !== node.id);
        } else {
          return [...prev, node.id];
        }
      } else {
        // Select only this node
        return [node.id];
      }
    });
  }, []);

  const onPaneClick = useCallback(() => {
    setSelectedNodes([]);
  }, []);

  const handleResetLayout = useCallback(() => {
    // Clear localStorage and force re-layout
    localStorage.removeItem("graph-node-changes");
    const { nodes: ln, edges: le } = getLayoutedElements(
      rawNodes,
      rawEdges,
      "TB"
    );
    setLayout({ nodes: ln, edges: le });
    console.log("Layout reset - cleared manual positions");
  }, []);

  const handleExportGraph = useCallback(() => {
    const exportedContent = exportUpdatedGraphContent(nodes);
    navigator.clipboard.writeText(exportedContent).then(() => {
      alert("Graph content copied to clipboard!");
    });
  }, [nodes]);

  const alignSelectedNodes = useCallback((alignmentType) => {
    if (selectedNodes.length < 2) return;

    const selectedNodeObjects = nodes.filter((node) =>
      selectedNodes.includes(node.id)
    );
    const nodeIds = selectedNodeObjects.map((node) => node.id);
    const positions = selectedNodeObjects.map((node) => node.position);

    let newPositions = [];

    switch (alignmentType) {
      case "verticalGap":
        // Sort by current y
        const sortedByY = [...selectedNodeObjects].sort(
          (a, b) => a.position.y - b.position.y
        );
        const minY = sortedByY[0].position.y;
        const avgX = positions.reduce((sum, pos) => sum + pos.x, 0) / positions.length;
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
        const avgY = positions.reduce((sum, pos) => sum + pos.y, 0) / positions.length;
        newPositions = sortedByX.map((node, index) => ({
          id: node.id,
          position: { x: minX + index * 500, y: avgY },
        }));
        break;
      case "strictVertical":
        const strictAvgX = positions.reduce((sum, pos) => sum + pos.x, 0) / positions.length;
        newPositions = selectedNodeObjects.map((node) => ({
          id: node.id,
          position: { ...node.position, x: strictAvgX },
        }));
        break;
      case "strictHorizontal":
        const strictAvgY = positions.reduce((sum, pos) => sum + pos.y, 0) / positions.length;
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
  }, [selectedNodes, nodes, setNodes]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Only handle if at least two nodes are selected
      if (selectedNodes.length < 2) return;

      if (e.shiftKey && e.key === "V") {
        alignSelectedNodes("verticalGap");
        e.preventDefault();
      } else if (e.shiftKey && e.key === "H") {
        alignSelectedNodes("horizontalGap");
        e.preventDefault();
      } else if (e.altKey && e.key === "V") {
        alignSelectedNodes("strictVertical");
        e.preventDefault();
      } else if (e.altKey && e.key === "H") {
        alignSelectedNodes("strictHorizontal");
        e.preventDefault();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedNodes, nodes, setNodes]);

  const nodesWithSelection = nodes.map((node) => ({
    ...node,
    selected: selectedNodes.includes(node.id),
  }));

  return (
    <ThemeProvider theme={lightTheme}>
      <FlowContainer>
        <ExportButton onClick={handleExportGraph}>Export Graph</ExportButton>
        <ResetButton onClick={handleResetLayout}>Reset Layout</ResetButton>
        <ReactFlow
          ref={reactFlowRef}
          panOnScroll={true}
          zoomOnScroll={false}
          preventScrolling={true}
          nodes={nodesWithSelection}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onNodeClick={onNodeClick}
          onPaneClick={onPaneClick}
          nodesDraggable={true}
          nodesConnectable={false}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          panOnDrag={[1, 2]}
          onMove={(_evt, viewport) => setViewport(viewport)}
        >
          <Controls />
          <CustomBackground offsetX={viewport.x} offsetY={viewport.y} zoom={viewport.zoom} />
        </ReactFlow>
      </FlowContainer>
    </ThemeProvider>
  );
}
