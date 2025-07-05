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

const CustomHandle = styled(Handle)`
  width: 32px;
  height: 32px;
  background: transparent;
  border: 1px solid ${props => props.theme.colors.abbey[800]};
  border-radius: 50%;
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

export default function CustomNode({ id, data, selected }) {
  const theme = useTheme();

  const getSectionColor = (section) => {
    return theme.nodes.section[section] || "#ff0000";
  };

  const getSectionBorderColor = (section) => {
    return theme.nodes.border[section] || "#ff0000";
  };

  const getGradeOpacity = (grade) => {
    return theme.nodes.grade[grade] || "50%";
  };

  const backgroundColor = getSectionColor(data?.section);
  const borderColor = getSectionBorderColor(data?.section);
  const opacity = getGradeOpacity(data?.grade);

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
      <CustomNodeWrap
        backgroundColor={backgroundColor}
        borderColor={borderColor}
        opacity={opacity}
      >
        <CustomHandle type="target" position={Position.Left} />
        <NodeContent>
          <NodeTitle>{id}</NodeTitle>
        </NodeContent>
        <CustomHandle type="source" position={Position.Right} />
      </CustomNodeWrap>
    </>
  );
}
