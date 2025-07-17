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
  overflow: visible;
  box-shadow: 0px 1px 2px -2px rgba(38, 38, 38, 0.06),
    0px 2px 2px -1px rgba(38, 38, 38, 0.08);
`;

const TheSolutionNodeWrap = styled.div`
  padding: 20px 80px;
  border: 4px solid
    ${({ theme, selected }) =>
      selected
        ? theme.colors.primary?.[100] || "#33ff70ff"
        : theme.colors.abbey[200]};
  border-radius: 200px;
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
  font-size: 200px;
  background-color: black;
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const DropSVG = ({ style, className }) => (
  <svg
    width="24"
    height="40"
    viewBox="0 0 24 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 26.1455C8 24.45 6.89 22.9919 5.46846 22.0679C2.17711 19.9285 0 16.2182 0 12C0 5.37305 5.37109 -5.24537e-07 12 -5.24537e-07C18.6289 -5.24537e-07 24 5.37305 24 12C24 16.2182 21.8229 19.9285 18.5315 22.0679C17.11 22.9919 16 24.45 16 26.1455L16 32C16 36.418 19.582 40 24 40L16 40L8 40L0 40C4.41797 40 8 36.418 8 32L8 26.1455Z"
      fill="white"
    />
  </svg>
);

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

  // Don't add drops to solution node
  if (data.type === "solution") {
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

  return (
    <NodeWrapper
      backgroundColor={backgroundColor}
      borderColor={isTheSolution ? undefined : borderColor}
      style={{ position: "relative" }}
    >
      <HandleComponent
        type="target"
        position={Position.Top}
        backgroundColor={isTheSolution ? undefined : backgroundColor}
        borderColor={isTheSolution ? undefined : borderColor}
        style={{
          position: "absolute",
          top: -36,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 200,
        }}
      />
      <NodeContent>
        <TitleComponent>{id}</TitleComponent>
      </NodeContent>
      <HandleComponent
        type="source"
        position={Position.Bottom}
        backgroundColor={isTheSolution ? undefined : backgroundColor}
        borderColor={isTheSolution ? undefined : borderColor}
        style={{
          position: "absolute",
          bottom: -36,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 200,
        }}
      />
      {/* Top Drop SVG */}
      <div
        style={{
          position: "absolute",
          top: -40,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
        }}
      >
        <DropSVG />
      </div>
      {/* Bottom Drop SVG (rotated 180deg) */}
      <div
        style={{
          position: "absolute",
          bottom: -40,
          left: "50%",
          transform: "translateX(-50%) rotate(180deg)",
          zIndex: 2,
        }}
      >
        <DropSVG />
      </div>
    </NodeWrapper>
  );
}
