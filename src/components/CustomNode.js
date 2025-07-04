import React from "react";
import { Handle, Position } from "reactflow";
import styled from "styled-components";
import { useTheme } from "../contexts/ThemeContext";

const CustomNodeWrap = styled.div`
    padding: 10px;
    border: 2px solid #0066ff;
    border-radius: 8px;
    background: ${(props) => props.backgroundColor};
    display: flex;
    align-items: center;
    font-size: 12px;
    opacity: ${(props) => props.opacity};
`;

const CustomHandle = styled(Handle)`
    width: 8px;
    height: 8px;
    background: #0066ff;
    border-radius: 50%;
`;

const NodeContent = styled.div`
  flex: 1;
  text-align: left;
  padding: 0 10px;
`;

const NodeTitle = styled.div`
  font-weight: bold;
  margin-bottom: 4px;
`;

export default function CustomNode({ id, data }) {
  const theme = useTheme();
  
  const getSectionColor = (section) => {
    return theme.nodes.section[section] || '#ff0000';
  };
  
  const getGradeOpacity = (grade) => {
    return theme.nodes.grade[grade] || '50%';
  };

  const backgroundColor = getSectionColor(data?.section);
  const opacity = getGradeOpacity(data?.grade);

  return (
    <CustomNodeWrap backgroundColor={backgroundColor} opacity={opacity}>
      <CustomHandle
        type="target"
        position={Position.Left}
      />
      <NodeContent>
        <NodeTitle>{id}</NodeTitle>
      </NodeContent>
      <CustomHandle
        type="source"
        position={Position.Right}
      />
    </CustomNodeWrap>
  );
}
