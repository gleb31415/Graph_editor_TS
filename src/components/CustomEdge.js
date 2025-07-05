import React from 'react';
import { getBezierPath, getStraightPath } from 'reactflow';
import { useTheme } from '../contexts/ThemeContext';

export default function CustomEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  data
}) {
  const theme = useTheme();
  
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  const getEdgeColor = (section) => {
    return theme.nodes.edge[section] || theme.nodes.edge.математика;
  };

  const sourceNode = data?.sourceNode;
  const targetNode = data?.targetNode;
  
  const sourceColor = getEdgeColor(sourceNode?.data?.section);
  const targetColor = getEdgeColor(targetNode?.data?.section);
  
  // Check if source and target have different sections
  const needsGradient = sourceNode?.data?.section !== targetNode?.data?.section;
  
  const gradientId = `gradient-${id}`;
  
  return (
    <>
      {needsGradient && (
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={sourceColor} />
            <stop offset="100%" stopColor={targetColor} />
          </linearGradient>
        </defs>
      )}
      <path
        id={id}
        style={{
          stroke: needsGradient ? `url(#${gradientId})` : sourceColor,
          strokeWidth: 8,
          fill: 'none',
        }}
        className="react-flow__edge-path"
        d={edgePath}
      />
    </>
  );
}
