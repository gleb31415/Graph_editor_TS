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
import { saveNodePosition, loadNodePositions, saveAllNodePositions } from "../_lib/positionPersistence";

const FlowContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeWidth = 172;
const nodeHeight = 80;

// layout-функция
function getLayoutedElements(nodes, edges, direction = "LR", savedPositions = {}) {
  dagreGraph.setGraph({ rankdir: direction, nodesep: 50, ranksep: 200 });

  nodes.forEach((n) =>
    dagreGraph.setNode(n.id, { width: nodeWidth, height: nodeHeight })
  );
  edges.forEach((e) => dagreGraph.setEdge(e.source, e.target));

  dagre.layout(dagreGraph);

  const laidOutNodes = nodes.map((n) => {
    const dagreNode = dagreGraph.node(n.id);
    const savedPosition = savedPositions[n.id];
    
    return {
      ...n,
      type: 'custom',
      position: savedPosition || {
        x: dagreNode.x - nodeWidth / 2,
        y: dagreNode.y - nodeHeight / 2,
      },
      data: {
        ...n.data,
        position: savedPosition || {
          x: dagreNode.x - nodeWidth / 2,
          y: dagreNode.y - nodeHeight / 2,
        }
      }
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

  // один раз расставляем по dagre с учетом сохраненных позиций
  useEffect(() => {
    const savedPositions = loadNodePositions();
    const { nodes: ln, edges: le } = getLayoutedElements(rawNodes, rawEdges, "LR", savedPositions);
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
    (changes) => {
      setNodes((nds) => {
        const updatedNodes = applyNodeChanges(changes, nds);
        
        // Save positions when nodes are moved
        changes.forEach(change => {
          if (change.type === 'position' && change.position) {
            saveNodePosition(change.id, change.position);
            
            // Update the node's data.position as well
            const nodeIndex = updatedNodes.findIndex(node => node.id === change.id);
            if (nodeIndex !== -1) {
              updatedNodes[nodeIndex] = {
                ...updatedNodes[nodeIndex],
                data: {
                  ...updatedNodes[nodeIndex].data,
                  position: change.position
                }
              };
            }
          }
        });
        
        return updatedNodes;
      });
    },
    []
  );

  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  return (
    <ThemeProvider theme={lightTheme}>
      <FlowContainer>
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
          nodeTypes={nodeTypes}
        >
          <Controls />
          <Background />
        </ReactFlow>
      </FlowContainer>
    </ThemeProvider>
  );
}
