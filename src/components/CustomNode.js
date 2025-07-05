import React from "react";
import { Handle, Position, NodeResizer } from "reactflow";
import styled from "styled-components";
import { useTheme } from "../contexts/ThemeContext";
import { MINIMAL_DELTA } from "../constants/movement";

const CustomNodeWrap = styled.div`
  padding: 10px;
  border: 2px solid ${(props) => props.borderColor};
  border-radius: 8px;
  background: ${(props) => props.backgroundColor};
  display: flex;
  align-items: center;
  font-size: 12px;
  opacity: ${(props) => props.opacity};
  width: 100%;
  height: 100%;
  min-width: ${MINIMAL_DELTA * 4}px;
  min-height: ${MINIMAL_DELTA * 2}px;
`;

const TheSolutionNodeWrap = styled.div`
  padding: 200px;
  border: 4px solid ${(props) => props.theme.colors.abbey[200]};
  border-radius: 64px;
  background: ${(props) => props.backgroundColor};
  display: flex;
  align-items: center;
  font-size: 240px;
  opacity: ${(props) => props.opacity};
  width: 100%;
  height: 100%;
  min-width: ${MINIMAL_DELTA * 4}px;
  min-height: ${MINIMAL_DELTA * 2}px;
`;

const CustomHandle = styled(Handle)`
  width: 16px;
  height: 16px;
  background: ${(props) => props.backgroundColor};
  border: 2px solid ${(props) => props.borderColor};
  border-radius: 50%;

  &.react-flow__handle-left {
    left: -8px; /* Half of handle width to center it on the border */
  }

  &.react-flow__handle-right {
    right: -8px; /* Half of handle width to center it on the border */
  }
`;

const TheSolutionHandle = styled(Handle)`
  width: 16px;
  height: 16px;
  background: #ffffff;
  border: 2px solid #ffffff;
  border-radius: 50%;

  &.react-flow__handle-left {
    left: -8px; /* Half of handle width to center it on the border */
  }

  &.react-flow__handle-right {
    right: -8px; /* Half of handle width to center it on the border */
  }
`;

const NodeContent = styled.div`
  flex: 1;
  text-align: left;
  padding: 0 10px;
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
`;

const NodeTitle = styled.div`
  font-weight: bold;
  line-height: 1.2;
  white-space: pre-wrap;
`;

const TheSolutionTitle = styled.div`
  font-weight: bold;
  line-height: 1.2;
  white-space: pre-wrap;
  font-family: "HelveticaNeueCyr-Bold", "Helvetica", Arial, sans-serif;
  background: linear-gradient(
    110deg,
    rgb(131, 131, 131) 45%,
    rgb(218, 218, 218) 50%,
    rgb(131, 131, 131) 55%
  );
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shimmer 10s linear infinite;

  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
`;

export default function CustomNode({ id, data, selected }) {
  const theme = useTheme();
  const isTheSolution = id === "TheSolution";

  const getSectionColor = (section) => {
    return theme.nodes.section[section] || "#ff0000";
  };

  const getSectionBorderColor = (section) => {
    return theme.nodes.border[section] || "#ff0000";
  };

  const getGradeOpacity = (grade) => {
    return theme.nodes.grade[grade] || "50%";
  };

  const backgroundColor = isTheSolution
    ? "#ffffff"
    : getSectionColor(data?.section);
  const borderColor = isTheSolution
    ? "#ffffff"
    : getSectionBorderColor(data?.section);
  const opacity = getGradeOpacity(data?.grade);

  const NodeWrapper = isTheSolution ? TheSolutionNodeWrap : CustomNodeWrap;
  const TitleComponent = isTheSolution ? TheSolutionTitle : NodeTitle;
  const HandleComponent = isTheSolution ? TheSolutionHandle : CustomHandle;

  return (
    <>
      <NodeResizer
        minWidth={MINIMAL_DELTA * 4}
        minHeight={MINIMAL_DELTA * 2}
        isVisible={selected}
        lineStyle={{
          borderColor: "#0066ff",
          borderWidth: 2,
        }}
        handleStyle={{
          backgroundColor: "#0066ff",
          width: 8,
          height: 8,
          borderRadius: "50%",
          border: "1px solid #fff",
        }}
      />
      <NodeWrapper
        backgroundColor={backgroundColor}
        borderColor={isTheSolution ? undefined : borderColor}
        opacity={opacity}
      >
        <HandleComponent
          type="target"
          position={Position.Left}
          backgroundColor={isTheSolution ? undefined : backgroundColor}
          borderColor={isTheSolution ? undefined : borderColor}
        />
        <NodeContent>
          <TitleComponent>{id}</TitleComponent>
        </NodeContent>
        <HandleComponent
          type="source"
          position={Position.Right}
          backgroundColor={isTheSolution ? undefined : backgroundColor}
          borderColor={isTheSolution ? undefined : borderColor}
        />
      </NodeWrapper>
    </>
  );
}
