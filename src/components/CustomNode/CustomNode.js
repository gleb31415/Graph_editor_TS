import React from "react";
import { Handle, Position } from "reactflow";
import styled from "styled-components";

const CustomNodeWrap = styled.div`
    padding: 10px;
    border: 2px solid #0066ff;
    border-radius: 8px;
    background: #e6f0ff;
    display: flex;
    align-items: center;
    font-size: 12px;
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

export default function CustomNode({ data }) {
  return (
    <CustomNodeWrap>
      <CustomHandle
        type="target"
        position={Position.Left}
      />
      <NodeContent>
        <NodeTitle>{data.title}</NodeTitle>
      </NodeContent>
      <CustomHandle
        type="source"
        position={Position.Right}
      />
    </CustomNodeWrap>
  );
}
