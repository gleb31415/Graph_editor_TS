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

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeWidth = 320;
const nodeHeight = 160;
const theSolutionWidth = 600;
const theSolutionHeight = 400;

// layout-функция
function getLayoutedElements(nodes, edges, direction = "LR") {
  dagreGraph.setGraph({ rankdir: direction, nodesep: 80, ranksep: 250 });

  nodes.forEach((n) => {
    const isTheSolution = n.id === "TheSolution";
    const width = isTheSolution ? theSolutionWidth : nodeWidth;
    const height = isTheSolution ? theSolutionHeight : nodeHeight;
    dagreGraph.setNode(n.id, { width, height });
  });
  edges.forEach((e) => dagreGraph.setEdge(e.source, e.target));

  dagre.layout(dagreGraph);
  const laidOutNodes = nodes.map((n) => {
    const { x, y } = dagreGraph.node(n.id);
    const isTheSolution = n.id === "TheSolution";
    const width = isTheSolution ? theSolutionWidth : nodeWidth;
    const height = isTheSolution ? theSolutionHeight : nodeHeight;

    // Use existing position if available, otherwise use Dagre calculated position
    const position = n.position
      ? n.position
      : {
          x: x - width / 2,
          y: y - height / 2,
        };

    return {
      ...n,
      type: "custom",
      position,
      width,
      height,
    };
  });

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

  return { nodes: laidOutNodes, edges: laidOutEdges };
}

// кастомный тип нода и edge
const nodeTypes = { custom: CustomNode };
const edgeTypes = { custom: CustomEdge };

export default function LectureTree() {
  const reactFlowRef = useRef();
  const [{ nodes: initNodes, edges: initEdges }, setLayout] = useState({
    nodes: [],
    edges: [],
  });

  // один раз расставляем по dagre с применением сохраненных изменений
  useEffect(() => {
    const nodesWithStoredChanges = applyStoredChanges(rawNodes);
    const { nodes: ln, edges: le } = getLayoutedElements(
      nodesWithStoredChanges,
      rawEdges
    );
    setLayout({ nodes: ln, edges: le });
  }, []);

  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  // после layout заливаем в state, чтобы включить drag
  useEffect(() => {
    setNodes(initNodes);
    setEdges(initEdges);
  }, [initNodes, initEdges]);

  // Focus on TheSolution node when nodes are loaded
  useEffect(() => {
    if (nodes.length > 0 && reactFlowRef.current) {
      const theSolutionNode = nodes.find((node) => node.id === "TheSolution");
      if (theSolutionNode) {
        setTimeout(() => {
          // Calculate appropriate zoom level for TheSolution node
          const viewportWidth = window.innerWidth;
          const viewportHeight = window.innerHeight;

          // Calculate zoom to fit with some margin
          const zoomX = (viewportWidth * 0.8) / theSolutionWidth;
          const zoomY = (viewportHeight * 0.8) / theSolutionHeight;
          const zoom = Math.min(zoomX, zoomY, 1); // Don't zoom in more than 100%

          const { setCenter } = reactFlowRef.current;
          setCenter(
            theSolutionNode.position.x + theSolutionWidth / 2,
            theSolutionNode.position.y + theSolutionHeight / 2,
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

      // Сохраняем изменения в localStorage
      saveNodeChanges(updatedNodes);
    },
    [snapToGrid, snapSizeToGrid, nodes]
  );

  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const handleExportGraph = useCallback(() => {
    const exportedContent = exportUpdatedGraphContent(nodes);
    console.log("Updated graph content:");
    console.log(exportedContent);

    // Копируем в буфер обмена
    navigator.clipboard
      .writeText(exportedContent)
      .then(() => {
        alert("Graph content copied to clipboard!");
      })
      .catch(() => {
        // Fallback для старых браузеров
        const textArea = document.createElement("textarea");
        textArea.value = exportedContent;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        alert("Graph content copied to clipboard!");
      });
  }, [nodes]);

  return (
    <ThemeProvider theme={lightTheme}>
      <FlowContainer>
        <ExportButton onClick={handleExportGraph}>Export Graph</ExportButton>
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
        >
          <Controls />
          <Background />
        </ReactFlow>
      </FlowContainer>
    </ThemeProvider>
  );
}
