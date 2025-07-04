"use client";

import { useState, useEffect, useCallback } from "react";
import ReactFlow, {
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
} from "reactflow";
import dagre from "dagre";
import styled from 'styled-components';
import CustomNode from "../components/CustomNode";
import { ThemeProvider } from "../contexts/ThemeContext";
import { lightTheme } from "../theme/theme";
import "reactflow/dist/style.css";
import { rawNodes, rawEdges } from "../_lib/graphContent";
import { MINIMAL_DELTA } from "../constants/movement";
import { saveNodeChanges, applyStoredChanges, exportUpdatedGraphContent } from "../utils/persistence";

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

const nodeWidth = 172;
const nodeHeight = 80;

// layout-функция
function getLayoutedElements(nodes, edges, direction = "LR") {
  dagreGraph.setGraph({ rankdir: direction, nodesep: 50, ranksep: 200 });

  nodes.forEach((n) =>
    dagreGraph.setNode(n.id, { width: nodeWidth, height: nodeHeight })
  );
  edges.forEach((e) => dagreGraph.setEdge(e.source, e.target));

  dagre.layout(dagreGraph);

  const laidOutNodes = nodes.map((n) => {
    const { x, y } = dagreGraph.node(n.id);
    return {
      ...n,
      type: 'custom',
      position: n.position || {
        x: x - nodeWidth / 2,
        y: y - nodeHeight / 2,
      },
      width: n.width || Math.round(nodeWidth / MINIMAL_DELTA) * MINIMAL_DELTA,
      height: n.height || Math.round(nodeHeight / MINIMAL_DELTA) * MINIMAL_DELTA,
    };
  });

  return { nodes: laidOutNodes, edges };
}

// кастомный тип нода
const nodeTypes = { custom: CustomNode };

export default function LectureTree() {
  const [{ nodes: initNodes, edges: initEdges }, setLayout] = useState({
    nodes: [],
    edges: [],
  });

  // один раз расставляем по dagre с применением сохраненных изменений
  useEffect(() => {
    const nodesWithStoredChanges = applyStoredChanges(rawNodes);
    const { nodes: ln, edges: le } = getLayoutedElements(nodesWithStoredChanges, rawEdges);
    setLayout({ nodes: ln, edges: le });
  }, []);

  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  // после layout заливаем в state, чтобы включить drag
  useEffect(() => {
    setNodes(initNodes);
    setEdges(initEdges);
  }, [initNodes, initEdges]);

  const snapToGrid = useCallback((position) => {
    return {
      x: Math.round(position.x / MINIMAL_DELTA) * MINIMAL_DELTA,
      y: Math.round(position.y / MINIMAL_DELTA) * MINIMAL_DELTA,
    };
  }, []);

  const snapSizeToGrid = useCallback((width, height) => {
    return {
      width: Math.round(width / MINIMAL_DELTA) * MINIMAL_DELTA,
      height: Math.round(height / MINIMAL_DELTA) * MINIMAL_DELTA,
    };
  }, []);

  const onNodesChange = useCallback((changes) => {
    const quantizedChanges = changes.map(change => {
      if (change.type === 'position' && change.position) {
        return {
          ...change,
          position: snapToGrid(change.position)
        };
      }
      if (change.type === 'dimensions' && (change.dimensions || change.resizing === false)) {
        const node = nodes.find(n => n.id === change.id);
        if (node && change.dimensions) {
          const snappedSize = snapSizeToGrid(change.dimensions.width, change.dimensions.height);
          return {
            ...change,
            dimensions: snappedSize
          };
        }
      }
      return change;
    });
    
    const updatedNodes = applyNodeChanges(quantizedChanges, nodes);
    setNodes(updatedNodes);
    
    // Сохраняем изменения в localStorage
    saveNodeChanges(updatedNodes);
  }, [snapToGrid, snapSizeToGrid, nodes]);

  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const handleExportGraph = useCallback(() => {
    const exportedContent = exportUpdatedGraphContent(nodes);
    console.log('Updated graph content:');
    console.log(exportedContent);
    
    // Копируем в буфер обмена
    navigator.clipboard.writeText(exportedContent).then(() => {
      alert('Graph content copied to clipboard!');
    }).catch(() => {
      // Fallback для старых браузеров
      const textArea = document.createElement('textarea');
      textArea.value = exportedContent;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert('Graph content copied to clipboard!');
    });
  }, [nodes]);

  return (
    <ThemeProvider theme={lightTheme}>
      <FlowContainer>
        <ExportButton onClick={handleExportGraph}>
          Export Graph
        </ExportButton>
        <ReactFlow
          panOnScroll={true}
          zoomOnScroll={false}
          preventScrolling={true}
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          fitView
          nodesDraggable={true}
          nodesConnectable={false}
          nodeTypes={nodeTypes}
        >
          <Controls />
          <Background />
        </ReactFlow>
      </FlowContainer>
    </ThemeProvider>
  );
}
