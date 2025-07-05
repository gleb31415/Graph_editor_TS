import React from "react";
import { Handle, Position } from "reactflow";
import styled from "styled-components";
import { useTheme } from "../contexts/ThemeContext";

const CustomNodeWrap = styled.div`
  padding: 16px;
  border: 2px solid ${(props) => props.borderColor};
  border-radius: 8px;
  background: ${(props) => props.backgroundColor};
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 12px;
  width: 320px;
  height: 160px;
  box-sizing: border-box;
  overflow: hidden;
`;

const TheSolutionNodeWrap = styled.div`
  padding: 60px;
  border: 4px solid ${(props) => props.theme.colors.abbey[200]};
  border-radius: 64px;
  background: ${(props) => props.backgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  width: 600px;
  height: 400px;
  box-sizing: border-box;
  overflow: hidden;
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
  padding: 0;
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  line-height: 1.3;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100%;
`;

const NodeTitle = styled.div`
  font-weight: bold;
  line-height: 1.3;
  white-space: normal;
  word-break: break-word;
  text-align: left;
  max-width: 100%;
`;

const TheSolutionTitle = styled.div`
  font-weight: bold;
  line-height: 1.2;
  white-space: normal;
  word-break: break-word;
  text-align: center;
  max-width: 100%;
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
  animation: shimmer 2s linear infinite;

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

  const backgroundColor = isTheSolution
    ? "#ffffff"
    : getSectionColor(data?.section);
  const borderColor = isTheSolution
    ? "#ffffff"
    : getSectionBorderColor(data?.section);

  const NodeWrapper = isTheSolution ? TheSolutionNodeWrap : CustomNodeWrap;
  const TitleComponent = isTheSolution ? TheSolutionTitle : NodeTitle;
  const HandleComponent = isTheSolution ? TheSolutionHandle : CustomHandle;

  return (
    <>
      <NodeWrapper
        backgroundColor={backgroundColor}
        borderColor={isTheSolution ? undefined : borderColor}
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
