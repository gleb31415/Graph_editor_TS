"use client";

import { useState, useEffect, useCallback, useRef } from "react";
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
  const reactFlowRef = useRef();
  const [{ nodes: initNodes, edges: initEdges }, setLayout] = useState({
    nodes: [],
    edges: [],
  });
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

  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

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

  // Track selected nodes
  const onSelectionChange = useCallback(({ nodes: selNodes }) => {
    setSelectedNodes(selNodes);
  }, []);

  // Alignment shortcuts
  useEffect(() => {
    function handleKeyDown(e) {
      if (!selectedNodes || selectedNodes.length < 2) return;
      // Get selected node ids
      const ids = selectedNodes.map((n) => n.id);
      // Get selected node objects
      const selObjs = nodes.filter((n) => ids.includes(n.id));
      if (e.shiftKey && (e.key === "v" || e.key === "V")) {
        // Align vertically with 40px gap
        const minX = Math.min(...selObjs.map((n) => n.position.x));
        const minY = Math.min(...selObjs.map((n) => n.position.y));
        selObjs.sort((a, b) => a.position.y - b.position.y);
        let y = minY;
        const updated = nodes.map((n) => {
          if (ids.includes(n.id)) {
            const newNode = { ...n, position: { x: minX, y } };
            y += n.height + 40;
            return newNode;
          }
          return n;
        });
        setNodes(updated);
        saveNodeChanges(updated);
      } else if (e.shiftKey && (e.key === "h" || e.key === "H")) {
        // Align horizontally with 40px gap
        const minX = Math.min(...selObjs.map((n) => n.position.x));
        const minY = Math.min(...selObjs.map((n) => n.position.y));
        selObjs.sort((a, b) => a.position.x - b.position.x);
        let x = minX;
        const updated = nodes.map((n) => {
          if (ids.includes(n.id)) {
            const newNode = { ...n, position: { x, y: minY } };
            x += n.width + 40;
            return newNode;
          }
          return n;
        });
        setNodes(updated);
        saveNodeChanges(updated);
      } else if (e.altKey && (e.key === "v" || e.key === "V")) {
        // Strict vertical align (same x)
        const minX = Math.min(...selObjs.map((n) => n.position.x));
        const updated = nodes.map((n) =>
          ids.includes(n.id) ? { ...n, position: { ...n.position, x: minX } } : n
        );
        setNodes(updated);
        saveNodeChanges(updated);
      } else if (e.altKey && (e.key === "h" || e.key === "H")) {
        // Strict horizontal align (same y)
        const minY = Math.min(...selObjs.map((n) => n.position.y));
        const updated = nodes.map((n) =>
          ids.includes(n.id) ? { ...n, position: { ...n.position, y: minY } } : n
        );
        setNodes(updated);
        saveNodeChanges(updated);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedNodes, nodes]);

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
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodesDraggable={true}
          nodesConnectable={false}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          selectionOnDrag={true}
          onSelectionChange={onSelectionChange}
          multiSelectionKeyCode={"Control"}
          selectionKeyCode={"Shift"}
          panOnDrag={[1, 2]}
        >
          <Controls />
          <Background />
        </ReactFlow>
      </FlowContainer>
    </ThemeProvider>
  );
}
