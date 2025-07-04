"use client";

import { useState, useEffect, useCallback } from "react";
import ReactFlow, {
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
} from "reactflow";
import dagre from "dagre";
import CustomNode from "../components/CustomNode";
import "reactflow/dist/style.css";
import { rawNodes, rawEdges } from "../_lib/graphContent";

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
      position: {
        x: x - nodeWidth / 2,
        y: y - nodeHeight / 2,
      },
    };
  });

  return { nodes: laidOutNodes, edges };
}

// кастомный тип нода
const nodeTypes = { custom: CustomNode };

// жёстко заданная структура с кастомным типом

export default function LectureTree() {
  const [{ nodes: initNodes, edges: initEdges }, setLayout] = useState({
    nodes: [],
    edges: [],
  });

  // один раз расставляем по dagre
  useEffect(() => {
    const { nodes: ln, edges: le } = getLayoutedElements(rawNodes, rawEdges);
    setLayout({ nodes: ln, edges: le });
  }, []);

  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  // после layout заливаем в state, чтобы включить drag
  useEffect(() => {
    setNodes(initNodes);
    setEdges(initEdges);
  }, [initNodes, initEdges]);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        panOnScroll={true}
        zoomOnScroll={false}
        preventScrolling={true}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
        nodesDraggable={false}
        nodeTypes={nodeTypes}
      >
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
}
