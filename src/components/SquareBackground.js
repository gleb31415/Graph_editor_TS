import { useStore } from "reactflow";

import { useTheme } from "../contexts/ThemeContext";

const SquareBackground = ({ size, gap, color, bgColor }) => {
  const theme = useTheme();
  // Use defaults if props are not provided
  const squareSize = size !== undefined ? size : 10;
  const squareGap = gap !== undefined ? gap : 200;
  const squareColor = "#EAEAE8";
  const backgroundColor = "#EAEAE8";
  const transform = useStore((state) => state.transform);

  return (
    <svg
      className="react-flow__background"
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
      }}
    >
      <defs>
        <pattern
          id="square-pattern"
          width={squareGap}
          height={squareGap}
          patternUnits="userSpaceOnUse"
          patternTransform={`translate(${transform[0]}, ${transform[1]}) scale(${transform[2]})`}
        >
          <rect width={squareSize} height={squareSize} fill={squareColor} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={backgroundColor} />
      <rect width="100%" height="100%" fill="url(#square-pattern)" />
    </svg>
  );
};

export default SquareBackground;
