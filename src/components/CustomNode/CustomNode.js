import React from "react";
import { Handle, Position } from "reactflow";
import styles from "./CustomNode.module.css";

export default function CustomNode({ data }) {
  return (
    <div className={styles.customNode}>
      <Handle
        type="target"
        position={Position.Left}
        className={styles.handle}
      />
      <div className={styles.content}>
        <div className={styles.title}>{data.title}</div>
        {/* <div className={styles.section}>Раздел: {data.section}</div>
        <div className={styles.grade}>Класс: {data.grade}</div> */}
        {/* <div className={styles.status}>
          <span
            className={styles.statusCircle}
            style={{ backgroundColor: data.completed ? "#0066ff" : "#ccc" }}
          />
        {data.completed ? "Выполнено" : "Не выполнено"}
        </div> */}
      </div>
      <Handle
        type="source"
        position={Position.Right}
        className={styles.handle}
      />
    </div>
  );
}
