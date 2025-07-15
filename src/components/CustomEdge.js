import React from "react";
import { getBezierPath } from "reactflow";
import { useTheme } from "../contexts/ThemeContext";

export default function CustomEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  data,
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

  const getEdgeColor = (section, nodeId, isSource = false) => {
    // Special handling for TheSolution node connections
    if (nodeId === "TheSolution") {
      // If TheSolution is the source, we need to look at the target node's section
      // If TheSolution is the target, we need to look at the source node's section
      const otherNode = isSource ? targetNode : sourceNode;
      const otherSection = otherNode?.data?.section;

      if (otherSection && theme.nodes.edge[otherSection]) {
        return theme.nodes.edge[otherSection]; // Use the edge color for the other node's section
      }
      return "#ffffff"; // Fallback to white
    }
    return theme.nodes.edge[section] || theme.nodes.edge.математика;
  };

  const sourceNode = data?.sourceNode;
  const targetNode = data?.targetNode;

  const sourceColor = getEdgeColor(
    sourceNode?.data?.section,
    sourceNode?.id,
    true
  );
  const targetColor = getEdgeColor(
    targetNode?.data?.section,
    targetNode?.id,
    false
  );

  // Check if source and target have different sections or one is TheSolution
  const needsGradient =
    sourceNode?.data?.section !== targetNode?.data?.section ||
    sourceNode?.id === "TheSolution" ||
    targetNode?.id === "TheSolution";

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
          strokeLinecap: "round",
          fill: "none",
        }}
        className="react-flow__edge-path"
        d={edgePath}
      />
    </>
  );
}
