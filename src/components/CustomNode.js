import React from "react";
import { Handle, Position } from "reactflow";
import styled from "styled-components";
import { useTheme } from "../contexts/ThemeContext";

const CustomNodeWrap = styled.div`
  padding: 20px;
  border: 2px solid
    ${({ theme, selected }) =>
      selected
        ? theme.colors.primary?.[100] || "#3399ff"
        : theme.colors.abbey["100"]};
  border-radius: 100px;
  background: ${({ selected, theme }) =>
    selected ? theme.colors.primary?.[100] || "#e6f0ff" : "#fff"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  line-height: 20px;
  width: 400px;
  height: 100px;
  box-sizing: border-box;
  overflow: hidden;
  box-shadow: 0px 1px 2px -2px rgba(38, 38, 38, 0.06),
    0px 2px 2px -1px rgba(38, 38, 38, 0.08);
`;

const TheSolutionNodeWrap = styled.div`
  padding: 20px;
  border: 4px solid
    ${({ theme, selected }) =>
      selected
        ? theme.colors.primary?.[100] || "#3399ff"
        : theme.colors.abbey[200]};
  border-radius: 20px;
  background: ${({ selected, backgroundColor, theme }) =>
    selected ? theme.colors.primary?.[100] || "#e6f0ff" : backgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  overflow: visible;
`;

const CustomHandle = styled(Handle)`
  width: 16px;
  height: 16px;
  background: ${(props) => props.backgroundColor};
  border: 2px solid ${(props) => props.borderColor};
  border-radius: 50%;

  &.react-flow__handle-top {
    top: -8px; /* Half of handle height to center it on the border */
  }

  &.react-flow__handle-bottom {
    bottom: -8px; /* Half of handle height to center it on the border */
  }
`;

const TheSolutionHandle = styled(Handle)`
  width: 16px;
  height: 16px;
  background: #ffffff;
  border: 2px solid #ffffff;
  border-radius: 50%;

  &.react-flow__handle-top {
    top: -8px; /* Half of handle height to center it on the border */
  }

  &.react-flow__handle-bottom {
    bottom: -8px; /* Half of handle height to center it on the border */
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
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const NodeTitle = styled.div`
  font-family: "Inter Tight", Arial, sans-serif;
  font-weight: 500;
  line-height: 1.3;
  text-align: center;
  max-width: 100%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
`;

const TheSolutionTitle = styled.div`
  font-family: "Inter Tight", Arial, sans-serif;
  font-weight: 800;
  line-height: 1;
  white-space: nowrap;
  text-align: center;
  font-size: 400px;
  background-color: black;
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
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

  const backgroundColor = selected
    ? "#e6f0ff" // light blue for selected
    : isTheSolution
    ? "#ffffff"
    : getSectionColor(data?.section);
  const borderColor = isTheSolution
    ? "#ffffff"
    : getSectionBorderColor(data?.section);

  const NodeWrapper = isTheSolution ? TheSolutionNodeWrap : CustomNodeWrap;
  const TitleComponent = isTheSolution ? TheSolutionTitle : NodeTitle;
  const HandleComponent = isTheSolution ? TheSolutionHandle : CustomHandle;

  return (
    <NodeWrapper
      backgroundColor={backgroundColor}
      borderColor={isTheSolution ? undefined : borderColor}
    >
      <HandleComponent
        type="target"
        position={Position.Top}
        backgroundColor={isTheSolution ? undefined : backgroundColor}
        borderColor={isTheSolution ? undefined : borderColor}
      />
      <NodeContent>
        <TitleComponent>{id}</TitleComponent>
      </NodeContent>
      <HandleComponent
        type="source"
        position={Position.Bottom}
        backgroundColor={isTheSolution ? undefined : backgroundColor}
        borderColor={isTheSolution ? undefined : borderColor}
      />
    </NodeWrapper>
  );
}
