(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/contexts/ThemeContext.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ThemeProvider": (()=>ThemeProvider),
    "useTheme": (()=>useTheme)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/theme/theme.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightTheme"]);
const ThemeProvider = ({ children, theme = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightTheme"] })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
        value: theme,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/contexts/ThemeContext.js",
        lineNumber: 8,
        columnNumber: 5
    }, this);
};
_c = ThemeProvider;
const useTheme = ()=>{
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
_s(useTheme, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/CustomNode.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reactflow$2f$core$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@reactflow/core/dist/esm/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ThemeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/ThemeContext.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
const CustomNodeWrap = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  padding: 20px;
  border: 2px solid
    ${({ theme, $selected })=>$selected ? theme.colors.primary?.[100] || "#3399ff" : theme.colors.abbey["100"]};
  border-radius: 100px;
  background: ${({ $selected, theme })=>$selected ? theme.colors.primary?.[100] || "#e6f0ff" : "#fff"};
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
const TheSolutionNodeWrap = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  padding: 40px 80px;
  border: 4px solid
    ${({ theme, $selected })=>$selected ? theme.colors.primary?.[100] || "#33ff70ff" : theme.colors.abbey[200]};
  border-radius: 200px;
  background: ${({ $selected, $backgroundColor, theme })=>$selected ? theme.colors.primary?.[100] || "#e6f0ff" : $backgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  overflow: visible;
`;
const NodeWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  overflow: visible;
  position: relative;
`;
const DropSvg = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].svg.attrs((props)=>({
        viewBox: "0 0 24 40",
        width: props.isSolution ? "48px" : "24px",
        height: props.isSolution ? "80px" : "40px"
    }))`
  position: absolute;
  left: 50%;
  transform: translateX(-50%)
    ${(props)=>props.position === "bottom" ? "rotate(180deg)" : ""};
  ${(props)=>props.position === "top" && "top: -40px;"}
  ${(props)=>props.position === "bottom" && `bottom: ${props.isSolution ? "-80px" : "-40px"};`}
  color: #DFDFDF;
  z-index: -1;
`;
_c = DropSvg;
const CustomHandle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reactflow$2f$core$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Handle"])`
  background: #f5f5f5;
  border: 1px solid #dfdfdf;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  &.react-flow__handle-top {
    top: -16px;
    left: 50%;
    transform: translateX(-50%);
  }
  &.react-flow__handle-bottom {
    bottom: -16px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
const TheSolutionHandle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reactflow$2f$core$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Handle"])`
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
const NodeContent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
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
_c1 = NodeContent;
const NodeTitle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
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
const TheSolutionTitle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  font-family: "Inter Tight", Arial, sans-serif;
  font-weight: 800;
  line-height: 1;
  white-space: nowrap;
  text-align: center;
  font-size: 120px;
  background-color: black;
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const getSectionColor = (theme, section)=>{
    return theme.nodes.section[section] || "#ff0000";
};
const getSectionBorderColor = (theme, section)=>{
    return theme.nodes.border[section] || "#ff0000";
};
const CustomNode = ({ id, data, selected })=>{
    _s();
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ThemeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const isTheSolution = id === "TheSolution";
    const isSolution = data?.type === "solution";
    const backgroundColor = selected ? "#e6f0ff" : isTheSolution ? "#ffffff" : getSectionColor(theme, data?.section);
    const borderColor = isTheSolution ? "#ffffff" : getSectionBorderColor(theme, data?.section);
    const NodeWrapperComponent = isTheSolution ? TheSolutionNodeWrap : CustomNodeWrap;
    const TitleComponent = isTheSolution ? TheSolutionTitle : NodeTitle;
    const HandleComponent = isTheSolution ? TheSolutionHandle : CustomHandle;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NodeWrapperComponent, {
        $backgroundColor: backgroundColor,
        $selected: selected,
        style: {
            position: "relative"
        },
        children: [
            !isSolution && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DropSvg, {
                        position: "top",
                        isSolution: false
                    }, void 0, false, {
                        fileName: "[project]/src/components/CustomNode.js",
                        lineNumber: 181,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HandleComponent, {
                        type: "target",
                        position: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reactflow$2f$core$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].Top
                    }, void 0, false, {
                        fileName: "[project]/src/components/CustomNode.js",
                        lineNumber: 182,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NodeContent, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TitleComponent, {
                    children: id
                }, void 0, false, {
                    fileName: "[project]/src/components/CustomNode.js",
                    lineNumber: 187,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/CustomNode.js",
                lineNumber: 186,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HandleComponent, {
                type: "source",
                position: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reactflow$2f$core$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].Bottom
            }, void 0, false, {
                fileName: "[project]/src/components/CustomNode.js",
                lineNumber: 191,
                columnNumber: 7
            }, this),
            isSolution ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DropSvg, {
                position: "bottom",
                isSolution: true,
                style: {
                    bottom: "-80px"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/CustomNode.js",
                lineNumber: 195,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DropSvg, {
                position: "bottom",
                isSolution: false
            }, void 0, false, {
                fileName: "[project]/src/components/CustomNode.js",
                lineNumber: 201,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CustomNode.js",
        lineNumber: 173,
        columnNumber: 5
    }, this);
};
_s(CustomNode, "VrMvFCCB9Haniz3VCRPNUiCauHs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ThemeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c2 = CustomNode;
const __TURBOPACK__default__export__ = CustomNode;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "DropSvg");
__turbopack_context__.k.register(_c1, "NodeContent");
__turbopack_context__.k.register(_c2, "CustomNode");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/CustomEdge.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CustomEdge)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reactflow$2f$core$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@reactflow/core/dist/esm/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ThemeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/ThemeContext.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function CustomEdge({ id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, data }) {
    _s();
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ThemeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [edgePath] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reactflow$2f$core$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBezierPath"])({
        sourceX,
        sourceY,
        sourcePosition,
        targetX,
        targetY,
        targetPosition
    });
    const getEdgeColor = (section, nodeId, isSource = false)=>{
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
    const sourceColor = getEdgeColor(sourceNode?.data?.section, sourceNode?.id, true);
    const targetColor = getEdgeColor(targetNode?.data?.section, targetNode?.id, false);
    // Check if source and target have different sections or one is TheSolution
    const needsGradient = sourceNode?.data?.section !== targetNode?.data?.section || sourceNode?.id === "TheSolution" || targetNode?.id === "TheSolution";
    const gradientId = `gradient-${id}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            needsGradient && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                    id: gradientId,
                    x1: "0%",
                    y1: "0%",
                    x2: "100%",
                    y2: "0%",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "0%",
                            stopColor: sourceColor
                        }, void 0, false, {
                            fileName: "[project]/src/components/CustomEdge.js",
                            lineNumber: 69,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "100%",
                            stopColor: targetColor
                        }, void 0, false, {
                            fileName: "[project]/src/components/CustomEdge.js",
                            lineNumber: 70,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CustomEdge.js",
                    lineNumber: 68,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/CustomEdge.js",
                lineNumber: 67,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                id: id,
                style: {
                    stroke: needsGradient ? `url(#${gradientId})` : sourceColor,
                    strokeWidth: 8,
                    strokeLinecap: "round",
                    fill: "none"
                },
                className: "react-flow__edge-path",
                d: edgePath
            }, void 0, false, {
                fileName: "[project]/src/components/CustomEdge.js",
                lineNumber: 74,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(CustomEdge, "VrMvFCCB9Haniz3VCRPNUiCauHs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ThemeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = CustomEdge;
var _c;
__turbopack_context__.k.register(_c, "CustomEdge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/_lib/graphContent.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "rawEdges": (()=>rawEdges),
    "rawNodes": (()=>rawNodes)
});
const rawNodes = [
    {
        "id": "TheSolution",
        "data": {
            "section": "",
            "grade": "11",
            "number": 1,
            "problems": []
        },
        "position": {
            "x": 7500,
            "y": -660
        },
        "width": 600,
        "height": 400
    },
    {
        "id": "Равномерное прямолинейное движение",
        "data": {
            "section": "механика",
            "grade": "7",
            "number": 2,
            "olympiads": [
                "МОШ, 7-8",
                "Росатом, 7-10",
                "Курчатов, 7-8",
                "Ломоносов, 7-9"
            ],
            "problems": [
                {
                    "name": "Расчет скорости при равномерном движении"
                },
                {
                    "name": "Определение времени движения"
                },
                {
                    "name": "Графики равномерного движения"
                }
            ]
        },
        "position": {
            "x": 6880,
            "y": 560
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Плотность",
        "data": {
            "section": "механика",
            "grade": "7",
            "number": 3,
            "olympiads": [
                "МОШ, 7-8",
                "Росатом, 8-9",
                "Курчатов, 7-8",
                "Ломоносов, 7-9"
            ],
            "problems": [
                {
                    "name": "Расчет плотности вещества"
                },
                {
                    "name": "Определение массы по плотности"
                },
                {
                    "name": "Сравнение плотностей разных веществ"
                }
            ]
        },
        "position": {
            "x": 7360,
            "y": 560
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Работа с графиками",
        "data": {
            "section": "математика",
            "grade": "7",
            "number": 4,
            "olympiads": [
                "МОШ, 7"
            ],
            "problems": []
        },
        "position": {
            "x": 6240,
            "y": 540
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Электрический заряд. Закон Кулона.",
        "data": {
            "section": "электромагнетизм",
            "grade": "8",
            "number": 5,
            "olympiads": [
                "МОШ, 10-11",
                "Росатом, 10-11",
                "Курчатов, 10-11",
                "Физтех, 10-11",
                "Ломоносов, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 8480,
            "y": 560
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Температура. Связь температуры с кинетической энергией движения молекул.",
        "data": {
            "section": "термодинамика",
            "grade": "8",
            "number": 6,
            "olympiads": [
                "МОШ, 10-11",
                "Росатом, 10-11",
                "Курчатов, 10-11",
                "Физтех, 10-11",
                "Ломоносов, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 10460,
            "y": 540
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Тень. Полутень.",
        "data": {
            "section": "оптика",
            "grade": "10",
            "number": 7,
            "olympiads": [
                "МОШ, 8-11",
                "Росатом, 10-11",
                "Курчатов, 8-11",
                "Физтех, 10-11",
                "Ломоносов, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 9440,
            "y": 560
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Средняя скорость. Относительное движение.",
        "data": {
            "section": "механика",
            "grade": "7",
            "number": 8,
            "olympiads": [
                "МОШ, 7-8",
                "Росатом, 7-9",
                "Курчатов, 7",
                "Физтех, 8",
                "Ломоносов, 7-9"
            ],
            "problems": []
        },
        "position": {
            "x": 6880,
            "y": 780
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Кинематические связи. Блоки.",
        "data": {
            "section": "механика",
            "grade": "7",
            "number": 9,
            "olympiads": [
                "МОШ, 8-11",
                "Росатом, 9-11",
                "Курчатов, 8-11",
                "Физтех, 9-10",
                "Ломоносов, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 6880,
            "y": 1020
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Закон Гука. Системы пружин.",
        "data": {
            "section": "механика",
            "grade": "7",
            "number": 10,
            "olympiads": [
                "МОШ, 7-11",
                "Росатом, 7-11",
                "Курчатов, 7-11",
                "Физтех, 9-11",
                "Ломоносов, 7-11"
            ],
            "problems": []
        },
        "position": {
            "x": 6880,
            "y": 1280
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Сила. Третий закон Ньютона.",
        "data": {
            "section": "механика",
            "grade": "7",
            "number": 11,
            "olympiads": [
                "МОШ, 7-11",
                "Росатом, 7-11",
                "Курчатов, 7-11",
                "Физтех, 9-11",
                "Ломоносов, 7-11"
            ],
            "problems": []
        },
        "position": {
            "x": 7360,
            "y": 780
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Сила тяжести",
        "data": {
            "section": "механика",
            "grade": "7",
            "number": 12,
            "problems": [],
            "olympiads": [
                "МОШ, 7-11",
                "Росатом, 7-11",
                "Курчатов, 7-11",
                "Физтех, 9-11",
                "Ломоносов, 7-11"
            ]
        },
        "position": {
            "x": 7360,
            "y": 1020
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Трение",
        "data": {
            "section": "механика",
            "grade": "7",
            "number": 13,
            "olympiads": [
                "МОШ, 7-11",
                "Росатом, 9-11",
                "Курчатов, 7-11",
                "Физтех, 9-11",
                "Ломоносов, 7-11"
            ],
            "problems": [
                "Очень большая проблема"
            ]
        },
        "position": {
            "x": 7860,
            "y": 1460
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Моменты",
        "data": {
            "section": "механика",
            "grade": "7",
            "number": 14,
            "olympiads": [
                "МОШ, 7-11",
                "Росатом, 7-11",
                "Курчатов, 7-11",
                "Физтех, 9-11",
                "Ломоносов, 7-11"
            ],
            "problems": []
        },
        "position": {
            "x": 6360,
            "y": 1600
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Работа. Мощность. КПД",
        "data": {
            "section": "механика",
            "grade": "7",
            "number": 15,
            "olympiads": [
                "МОШ, 9-11",
                "Росатом, 9-11",
                "Курчатов, 9-11",
                "Физтех, 9-11",
                "Ломоносов, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 6880,
            "y": 1600
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Системы блоков. Статика со связями.",
        "data": {
            "section": "механика",
            "grade": "7",
            "number": 16,
            "olympiads": [
                "МОШ, 7-11",
                "Росатом, 9-11",
                "Курчатов, 8-11",
                "Физтех, 9-11",
                "Ломоносов, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 6360,
            "y": 1820
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Давление. Сообщающиеся сосуды",
        "data": {
            "section": "механика",
            "grade": "7",
            "number": 17,
            "olympiads": [
                "МОШ, 7-9",
                "Росатом, 9",
                "Курчатов, 7-8",
                "Ломоносов, 7-9"
            ],
            "problems": []
        },
        "position": {
            "x": 7360,
            "y": 1380
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Сила Архимеда",
        "data": {
            "section": "механика",
            "grade": "7",
            "number": 18,
            "olympiads": [
                "МОШ, 7-11",
                "Росатом, 7-11",
                "Курчатов, 7-11",
                "Физтех, 9-11",
                "Ломоносов, 7-11"
            ],
            "problems": []
        },
        "position": {
            "x": 7360,
            "y": 1600
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Тур. Механика, 7 класс.",
        "data": {
            "section": "механика",
            "grade": "7",
            "number": 19,
            "problems": []
        },
        "position": {
            "x": 6880,
            "y": 2060
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Энергия",
        "data": {
            "section": "механика",
            "grade": "8",
            "number": 20,
            "olympiads": [
                "МОШ, 8-11",
                "Росатом, 8-11",
                "Курчатов, 8-11",
                "Физтех, 9-11",
                "Ломоносов, 7-11"
            ],
            "problems": []
        },
        "position": {
            "x": 6320,
            "y": 2980
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Движение со связями",
        "data": {
            "section": "механика",
            "grade": "9",
            "number": 21,
            "olympiads": [
                "МОШ, 9-11",
                "Росатом, 9-11",
                "Курчатов, 9-11",
                "Физтех, 9-11",
                "Ломоносов, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 5820,
            "y": 2780
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Равноускоренное движение",
        "data": {
            "section": "механика",
            "grade": "9",
            "number": 22,
            "olympiads": [
                "МОШ, 9-11",
                "Росатом, 9-11",
                "Курчатов, 9-11",
                "Физтех, 9-11",
                "Ломоносов, 9-11"
            ],
            "problems": []
        },
        "position": {
            "x": 7340,
            "y": 2880
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Конус Маха",
        "data": {
            "section": "механика",
            "grade": "9",
            "number": 23,
            "problems": []
        },
        "position": {
            "x": 6880,
            "y": 2660
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Упругие столкновения с тяжёлой стенкой",
        "data": {
            "section": "механика",
            "grade": "9",
            "number": 24,
            "olympiads": [
                "МОШ, 9-11",
                "Росатом, 9-11",
                "Курчатов, 9-11",
                "Физтех, 9-11",
                "Ломоносов, 9-11"
            ],
            "problems": []
        },
        "position": {
            "x": 7340,
            "y": 2340
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Метод виртуальных перемещений",
        "data": {
            "section": "механика",
            "grade": "8",
            "number": 25,
            "olympiads": [
                "МОШ, 8-11",
                "Курчатов, 9-11",
                "Физтех, 9-11",
                "Ломоносов, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 6580,
            "y": 3220
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Бернулли",
        "data": {
            "section": "механика",
            "grade": "9",
            "number": 26,
            "problems": []
        },
        "position": {
            "x": 5860,
            "y": 3920
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Устойчивость равновесия",
        "data": {
            "section": "механика",
            "grade": "10",
            "number": 27,
            "olympiads": [
                "МОШ, 9-11",
                "Росатом, 10-11",
                "Курчатов, 9-11",
                "Физтех, 9-11",
                "Ломоносов, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 6320,
            "y": 3520
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Мгновенный центр вращения",
        "data": {
            "section": "механика",
            "grade": "9",
            "number": 28,
            "olympiads": [
                "МОШ, 9-11",
                "Росатом, 10-11",
                "Курчатов, 10-11",
                "Физтех, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 5820,
            "y": 2980
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Теорема Кёнига",
        "data": {
            "section": "механика",
            "grade": "9",
            "number": 29,
            "olympiads": [
                "МОШ, 9-11",
                "Росатом, 9-11",
                "Курчатов, 9-11",
                "Физтех, 9-11",
                "Ломоносов, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 5820,
            "y": 3200
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Тур. Движение твёрдого тела, 9 класс",
        "data": {
            "section": "механика",
            "grade": "9",
            "number": 30,
            "problems": []
        },
        "position": {
            "x": 5820,
            "y": 3700
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Динамика. Второй закон Ньютона.",
        "data": {
            "section": "механика",
            "grade": "9",
            "number": 31,
            "olympiads": [
                "МОШ, 9-11",
                "Росатом, 9-11",
                "Курчатов, 9-11",
                "Физтех, 9-11",
                "Ломоносов, 7-11"
            ],
            "problems": []
        },
        "position": {
            "x": 6900,
            "y": 4020
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Равномерное движение по окружности",
        "data": {
            "section": "механика",
            "grade": "9",
            "number": 32,
            "olympiads": [
                "МОШ, 9-11",
                "Росатом, 9-11",
                "Курчатов, 9-11",
                "Физтех, 9-11",
                "Ломоносов, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 6900,
            "y": 3120
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Баллистика. Координатный метод.",
        "data": {
            "section": "механика",
            "grade": "9",
            "number": 33,
            "olympiads": [
                "МОШ, 9-11",
                "Росатом, 9-11",
                "Курчатов, 9-11",
                "Физтех, 9-11",
                "Ломоносов, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 7340,
            "y": 3120
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Баллистика. Векторный метод.",
        "data": {
            "section": "механика",
            "grade": "9",
            "number": 34,
            "olympiads": [
                "МОШ, 9-11",
                "Росатом, 9-11",
                "Курчатов, 9-11",
                "Физтех, 9-11",
                "Ломоносов, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 7340,
            "y": 3320
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Тур. Баллистика, 9 класс.",
        "data": {
            "section": "механика",
            "grade": "9",
            "number": 35,
            "problems": []
        },
        "position": {
            "x": 7340,
            "y": 3540
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Центростремительное ускорение",
        "data": {
            "section": "механика",
            "grade": "9",
            "number": 36,
            "olympiads": [
                "МОШ, 9-11",
                "Росатом, 9-11",
                "Курчатов, 9-11",
                "Физтех, 9-11",
                "Ломоносов, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 6900,
            "y": 3320
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Неравномерное движение по окружности",
        "data": {
            "section": "механика",
            "grade": "9",
            "number": 37,
            "problems": []
        },
        "position": {
            "x": 6900,
            "y": 3520
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Всемирное тяготение. Космические скорости.",
        "data": {
            "section": "механика",
            "grade": "9",
            "number": 38,
            "olympiads": [
                "Ломоносов, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 7000,
            "y": 4840
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Неинерциальные системы отсчёта",
        "data": {
            "section": "механика",
            "grade": "9",
            "number": 39,
            "olympiads": [
                "Физтех, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 7260,
            "y": 5060
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Вращательные НеИСО",
        "data": {
            "section": "механика",
            "grade": "9",
            "number": 40,
            "olympiads": [
                "Физтех, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 7260,
            "y": 5360
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Сухое трение",
        "data": {
            "section": "механика",
            "grade": "9",
            "number": 41,
            "olympiads": [
                "МОШ, 9-11",
                "Росатом, 9-11",
                "Курчатов, 9-11",
                "Физтех, 9-11",
                "Ломоносов, 9-11"
            ],
            "problems": []
        },
        "position": {
            "x": 6740,
            "y": 4520
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Импульс",
        "data": {
            "section": "механика",
            "grade": "9",
            "number": 42,
            "olympiads": [
                "МОШ, 9-11",
                "Росатом, 9-11",
                "Курчатов, 9-11",
                "Физтех, 9-11",
                "Ломоносов, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 7580,
            "y": 4600
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Реактивная сила",
        "data": {
            "section": "механика",
            "grade": "9",
            "number": 43,
            "problems": []
        },
        "position": {
            "x": 7580,
            "y": 4900
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Вязкое трение",
        "data": {
            "section": "механика",
            "grade": "9",
            "number": 44,
            "problems": []
        },
        "position": {
            "x": 6540,
            "y": 4760
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Столкновения",
        "data": {
            "section": "механика",
            "grade": "9",
            "number": 45,
            "olympiads": [
                "МОШ, 9-11",
                "Росатом, 10-11",
                "Курчатов, 10-11",
                "Физтех, 9-11",
                "Ломоносов, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 8020,
            "y": 4900
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Тур. Законы сохранения, 9 класс.",
        "data": {
            "section": "механика",
            "grade": "9",
            "number": 46,
            "problems": []
        },
        "position": {
            "x": 7840,
            "y": 5240
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Тур. Динамика, 9 класс.",
        "data": {
            "section": "механика",
            "grade": "9",
            "number": 47,
            "problems": []
        },
        "position": {
            "x": 7000,
            "y": 5660
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Момент импульса",
        "data": {
            "section": "механика",
            "grade": "11",
            "number": 48,
            "olympiads": [
                "МОШ, 11",
                "Курчатов, 11",
                "Физтех, 11"
            ],
            "problems": []
        },
        "position": {
            "x": 7840,
            "y": 5940
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Момент инерции",
        "data": {
            "section": "механика",
            "grade": "11",
            "number": 49,
            "olympiads": [
                "МОШ, 11",
                "Росатом, 11",
                "Курчатов, 11",
                "Физтех, 11",
                "Ломоносов, 11"
            ],
            "problems": []
        },
        "position": {
            "x": 7600,
            "y": 6180
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Гравитация. Законы Кеплера.",
        "data": {
            "section": "механика",
            "grade": "11",
            "number": 50,
            "olympiads": [
                "МОШ, 11",
                "Ломоносов, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 7840,
            "y": 6400
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Тур. Механика, 11 класс.",
        "data": {
            "section": "механика",
            "grade": "11",
            "number": 51,
            "problems": []
        },
        "position": {
            "x": 7600,
            "y": 6640
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Гармонические колебания",
        "data": {
            "section": "механика",
            "grade": "11",
            "number": 52,
            "olympiads": [
                "МОШ, 11",
                "Росатом, 11",
                "Курчатов, 11",
                "Физтех, 11",
                "Ломоносов, 11"
            ],
            "problems": []
        },
        "position": {
            "x": 6320,
            "y": 3720
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Энергия в гармонических колебаниях",
        "data": {
            "section": "механика",
            "grade": "11",
            "number": 53,
            "olympiads": [
                "МОШ, 11",
                "Росатом, 11",
                "Курчатов, 11",
                "Физтех, 11",
                "Ломоносов, 11"
            ],
            "problems": []
        },
        "position": {
            "x": 6320,
            "y": 3920
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Затухающие колебания",
        "data": {
            "section": "механика",
            "grade": "11",
            "number": 54,
            "olympiads": [
                "МОШ, 11"
            ],
            "problems": []
        },
        "position": {
            "x": 6320,
            "y": 4120
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Резонанс",
        "data": {
            "section": "механика",
            "grade": "11",
            "number": 55,
            "olympiads": [
                "МОШ, 11",
                "Курчатов, 11",
                "Ломоносов, 11"
            ],
            "problems": []
        },
        "position": {
            "x": 6320,
            "y": 4320
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Сложение колебаний. Биения.",
        "data": {
            "section": "механика",
            "grade": "11",
            "number": 56,
            "problems": []
        },
        "position": {
            "x": 6320,
            "y": 4520
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Тур. Колебания, 11 класс",
        "data": {
            "section": "механика",
            "grade": "11",
            "number": 57,
            "problems": []
        },
        "position": {
            "x": 5920,
            "y": 5060
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Механические волны",
        "data": {
            "section": "механика",
            "grade": "11",
            "number": 58,
            "olympiads": [
                "МОШ, 11",
                "Курчатов, 11"
            ],
            "problems": []
        },
        "position": {
            "x": 5720,
            "y": 4740
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Постулаты специальной теории относительности",
        "data": {
            "section": "механика",
            "grade": "11",
            "number": 59,
            "problems": []
        },
        "position": {
            "x": 6320,
            "y": 4960
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Эффект Доплера",
        "data": {
            "section": "механика",
            "grade": "11",
            "number": 60,
            "olympiads": [
                "МОШ, 11"
            ],
            "problems": []
        },
        "position": {
            "x": 5720,
            "y": 5460
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Парадоксы и эффекты",
        "data": {
            "section": "механика",
            "grade": "11",
            "number": 61,
            "olympiads": [],
            "problems": []
        },
        "position": {
            "x": 6320,
            "y": 5160
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Релятивистская динамика",
        "data": {
            "section": "механика",
            "grade": "11",
            "number": 62,
            "olympiads": [],
            "problems": []
        },
        "position": {
            "x": 6320,
            "y": 5360
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Тригонометрия",
        "data": {
            "section": "математика",
            "grade": "8",
            "number": 63,
            "olympiads": [
                "МОШ, 8-11",
                "Росатом, 9-11",
                "Курчатов, 8-11",
                "Физтех, 9-11",
                "Ломоносов, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 6100,
            "y": 760
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Свойства тригонометрических функций",
        "data": {
            "section": "математика",
            "grade": "9",
            "number": 64,
            "olympiads": [
                "МОШ, 9-11",
                "Росатом, 9-11",
                "Курчатов, 9-11",
                "Физтех, 9-11",
                "Ломоносов, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 7920,
            "y": 1160
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Векторы",
        "data": {
            "section": "математика",
            "grade": "9",
            "number": 65,
            "olympiads": [
                "МОШ, 7-11",
                "Росатом, 7-11",
                "Курчатов, 7-11",
                "Физтех, 7-11",
                "Ломоносов, 7-9, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 6300,
            "y": 1040
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Дифференцирование",
        "data": {
            "section": "математика",
            "grade": "9",
            "number": 66,
            "olympiads": [
                "МОШ, 9-11",
                "Росатом, 10-11",
                "Курчатов, 9-11",
                "Физтех, 10-11",
                "Ломоносов, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 7920,
            "y": 1360
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Интегрирование",
        "data": {
            "section": "математика",
            "grade": "9",
            "number": 67,
            "olympiads": [
                "МОШ, 10-11",
                "Курчатов, 10-11",
                "Физтех, 11"
            ],
            "problems": []
        },
        "position": {
            "x": 7920,
            "y": 1560
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Работа с малыми величинами",
        "data": {
            "section": "математика",
            "grade": "10",
            "number": 68,
            "olympiads": [
                "МОШ, 11",
                "Курчатов, 11"
            ],
            "problems": []
        },
        "position": {
            "x": 7920,
            "y": 1760
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Логарифмы, показательные функции",
        "data": {
            "section": "математика",
            "grade": "10",
            "number": 69,
            "olympiads": [
                "МОШ, 10-11",
                "Росатом, 10-11",
                "Курчатов, 10-11",
                "Физтех, 10-11",
                "Ломоносов, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 7920,
            "y": 1960
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Телесный угол",
        "data": {
            "section": "математика",
            "grade": "10",
            "number": 70,
            "olympiads": [
                "МОШ, 10-11",
                "Росатом, 10-11",
                "Курчатов, 10-11",
                "Физтех, 10-11",
                "Ломоносов, 11"
            ],
            "problems": []
        },
        "position": {
            "x": 7920,
            "y": 2160
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Векторное произведение",
        "data": {
            "section": "математика",
            "grade": "11",
            "number": 71,
            "olympiads": [
                "МОШ, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 7920,
            "y": 2360
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Дифференциальные уравнения. Уравнения колебаний.",
        "data": {
            "section": "математика",
            "grade": "11",
            "number": 72,
            "olympiads": [
                "МОШ, 11",
                "Росатом, 11",
                "Курчатов, 11",
                "Физтех, 11",
                "Ломоносов, 11"
            ],
            "problems": []
        },
        "position": {
            "x": 7920,
            "y": 2560
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Ряды",
        "data": {
            "section": "математика",
            "grade": "11",
            "number": 73,
            "problems": []
        },
        "position": {
            "x": 7920,
            "y": 2760
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Комплексные числа",
        "data": {
            "section": "математика",
            "grade": "11",
            "number": 74,
            "olympiads": [
                "МОШ, 11",
                "Росатом, 11",
                "Курчатов, 11",
                "Физтех, 11",
                "Ломоносов, 11"
            ],
            "problems": []
        },
        "position": {
            "x": 7920,
            "y": 2960
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Отражение света. Зеркала.",
        "data": {
            "section": "оптика",
            "grade": "10",
            "number": 75,
            "olympiads": [
                "МОШ, 8-11",
                "Росатом, 8-11",
                "Курчатов, 8-11",
                "Физтех, 10-11",
                "Ломоносов, 8-11"
            ],
            "problems": []
        },
        "position": {
            "x": 9440,
            "y": 760
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Преломление света. Закон Снеллиуса.",
        "data": {
            "section": "оптика",
            "grade": "10",
            "number": 76,
            "olympiads": [
                "МОШ, 9-11",
                "Росатом, 10-11",
                "Курчатов, 10-11",
                "Физтех, 10-11",
                "Ломоносов, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 9440,
            "y": 960
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Пластины, призмы",
        "data": {
            "section": "оптика",
            "grade": "10",
            "number": 77,
            "olympiads": [
                "МОШ, 9-11",
                "Росатом, 10-11",
                "Курчатов, 10-11",
                "Физтех, 10-11",
                "Ломоносов, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 9440,
            "y": 1160
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Полное внутреннее отражение",
        "data": {
            "section": "оптика",
            "grade": "10",
            "number": 78,
            "olympiads": [
                "МОШ, 9-11",
                "Росатом, 10-11",
                "Курчатов, 10-11",
                "Физтех, 10-11",
                "Ломоносов, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 9440,
            "y": 1360
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Линза, построение изображений",
        "data": {
            "section": "оптика",
            "grade": "10",
            "number": 79,
            "olympiads": [
                "МОШ, 10-11",
                "Росатом, 10-11",
                "Курчатов, 10-11",
                "Физтех, 10-11",
                "Ломоносов, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 9440,
            "y": 1560
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Формула тонкой линзы",
        "data": {
            "section": "оптика",
            "grade": "10",
            "number": 80,
            "olympiads": [
                "МОШ, 10-11",
                "Росатом, 10-11",
                "Курчатов, 10-11",
                "Физтех, 10-11",
                "Ломоносов, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 9440,
            "y": 1760
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Увеличение",
        "data": {
            "section": "оптика",
            "grade": "10",
            "number": 81,
            "olympiads": [
                "МОШ, 10-11",
                "Росатом, 11",
                "Курчатов, 11",
                "Физтех, 11",
                "Ломоносов, 11"
            ],
            "problems": []
        },
        "position": {
            "x": 9440,
            "y": 1960
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Оптические системы",
        "data": {
            "section": "оптика",
            "grade": "10",
            "number": 82,
            "olympiads": [
                "МОШ, 10-11",
                "Росатом, 11",
                "Курчатов, 11",
                "Физтех, 11",
                "Ломоносов, 11"
            ],
            "problems": []
        },
        "position": {
            "x": 9440,
            "y": 2160
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Тур. Оптика, 10 класс.",
        "data": {
            "section": "оптика",
            "grade": "10",
            "number": 83,
            "problems": []
        },
        "position": {
            "x": 9420,
            "y": 11260
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Дисперсия",
        "data": {
            "section": "оптика",
            "grade": "11",
            "number": 84,
            "olympiads": [
                "МОШ, 9-11"
            ],
            "problems": []
        },
        "position": {
            "x": 8460,
            "y": 11860
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Интерференция света. Когерентные источники.",
        "data": {
            "section": "оптика",
            "grade": "11",
            "number": 85,
            "olympiads": [
                "МОШ, 11",
                "Росатом, 11",
                "Физтех, 11",
                "Курчатов, 11",
                "Ломоносов, 11"
            ],
            "problems": []
        },
        "position": {
            "x": 8460,
            "y": 12060
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Интерференция света. Временная когерентность.",
        "data": {
            "section": "оптика",
            "grade": "11",
            "number": 86,
            "problems": []
        },
        "position": {
            "x": 8460,
            "y": 12260
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Дифракция Фраунгофера",
        "data": {
            "section": "оптика",
            "grade": "11",
            "number": 87,
            "olympiads": [
                "МОШ, 11",
                "Росатом, 11",
                "Курчатов, 11",
                "Физтех, 11",
                "Ломоносов, 11"
            ],
            "problems": []
        },
        "position": {
            "x": 8460,
            "y": 12460
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Дифракция Френеля",
        "data": {
            "section": "оптика",
            "grade": "11",
            "number": 88,
            "olympiads": [
                "МОШ, 11",
                "Росатом, 11",
                "Курчатов, 11",
                "Физтех, 11",
                "Ломоносов, 11"
            ],
            "problems": []
        },
        "position": {
            "x": 8460,
            "y": 12660
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Дифракционная решётка",
        "data": {
            "section": "оптика",
            "grade": "11",
            "number": 89,
            "olympiads": [
                "МОШ, 11",
                "Росатом, 11",
                "Курчатов, 11",
                "Физтех, 11",
                "Ломоносов, 11"
            ],
            "problems": []
        },
        "position": {
            "x": 8460,
            "y": 13060
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Поляризация света",
        "data": {
            "section": "оптика",
            "grade": "11",
            "number": 90,
            "problems": []
        },
        "position": {
            "x": 8460,
            "y": 12860
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Тур. Волновая оптика, 11 класс",
        "data": {
            "section": "оптика",
            "grade": "11",
            "number": 91,
            "problems": []
        },
        "position": {
            "x": 8460,
            "y": 13260
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Напряжённость электрического поля, потенциал",
        "data": {
            "section": "электромагнетизм",
            "grade": "8",
            "number": 92,
            "olympiads": [
                "МОШ, 10-11",
                "Росатом, 10-11",
                "Курчатов, 10-11",
                "Физтех, 10-11",
                "Ломоносов, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 8480,
            "y": 780
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Сила тока, напряжение. Закон Ома.",
        "data": {
            "section": "электромагнетизм",
            "grade": "8",
            "number": 93,
            "olympiads": [
                "МОШ, 8-11",
                "Росатом, 8-11",
                "Курчатов, 8-11",
                "Физтех, 9-11",
                "Ломоносов, 7-9, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 8480,
            "y": 980
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Мощность электрического тока",
        "data": {
            "section": "электромагнетизм",
            "grade": "8",
            "number": 94,
            "olympiads": [
                "МОШ, 8-11",
                "Росатом, 8-11",
                "Курчатов, 8-11",
                "Физтех, 9-11",
                "Ломоносов, 7-9, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 8940,
            "y": 3160
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Тур. Электричество, 8 класс.",
        "data": {
            "section": "электромагнетизм",
            "grade": "8",
            "number": 95,
            "problems": []
        },
        "position": {
            "x": 8460,
            "y": 5260
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Параллельное и последовательное соединения резисторов",
        "data": {
            "section": "электромагнетизм",
            "grade": "8",
            "number": 96,
            "olympiads": [
                "МОШ, 8-11",
                "Росатом, 8-11",
                "Курчатов, 8-11",
                "Физтех, 9-11",
                "Ломоносов, 7-9, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 8480,
            "y": 2940
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Правила Кирхгофа",
        "data": {
            "section": "электромагнетизм",
            "grade": "8",
            "number": 97,
            "olympiads": [
                "МОШ, 8-11",
                "Росатом, 8-11",
                "Курчатов, 8-11",
                "Физтех, 9-11",
                "Ломоносов, 7-9, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 8480,
            "y": 3160
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Симметричные цепи",
        "data": {
            "section": "электромагнетизм",
            "grade": "8",
            "number": 98,
            "olympiads": [
                "МОШ, 8-11",
                "Росатом, 8-11",
                "Курчатов, 8-11",
                "Физтех, 9-11",
                "Ломоносов, 7-9, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 8680,
            "y": 3420
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Метод наложения токов",
        "data": {
            "section": "электромагнетизм",
            "grade": "8",
            "number": 99,
            "olympiads": [
                "МОШ, 8-11",
                "Росатом, 8-11",
                "Курчатов, 8-11",
                "Физтех, 9-11",
                "Ломоносов, 7-9, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 8680,
            "y": 3660
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Бесконечные цепи",
        "data": {
            "section": "электромагнетизм",
            "grade": "8",
            "number": 100,
            "olympiads": [
                "МОШ, 8-11",
                "Росатом, 8-11",
                "Курчатов, 8-11",
                "Физтех, 9-11",
                "Ломоносов, 7-9, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 8680,
            "y": 3800
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Источники тока",
        "data": {
            "section": "электромагнетизм",
            "grade": "8",
            "number": 101,
            "olympiads": [
                "МОШ, 8-11",
                "Физтех, 9-11"
            ],
            "problems": []
        },
        "position": {
            "x": 8240,
            "y": 3420
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Метод эквивалентного источника",
        "data": {
            "section": "электромагнетизм",
            "grade": "8",
            "number": 102,
            "olympiads": [
                "МОШ, 8-10",
                "Росатом, 8-9",
                "Курчатов, 8-9",
                "Физтех, 9",
                "Ломоносов, 7-9, 10"
            ],
            "problems": []
        },
        "position": {
            "x": 8240,
            "y": 3660
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Измерительные приборы",
        "data": {
            "section": "электромагнетизм",
            "grade": "8",
            "number": 103,
            "olympiads": [
                "МОШ, 8-11",
                "Росатом, 8-11",
                "Курчатов, 8-11",
                "Физтех, 9-11",
                "Ломоносов, 7-9, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 7720,
            "y": 3660
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Вольтамперная характеристика",
        "data": {
            "section": "электромагнетизм",
            "grade": "8",
            "number": 104,
            "olympiads": [
                "МОШ, 8-11",
                "Росатом, 8-11",
                "Курчатов, 8-11",
                "Физтех, 9-11",
                "Ломоносов, 7-9, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 7720,
            "y": 4200
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Мостовые схемы",
        "data": {
            "section": "электромагнетизм",
            "grade": "8",
            "number": 105,
            "olympiads": [
                "МОШ, 8-11",
                "Росатом, 8-11",
                "Курчатов, 8-11",
                "Физтех, 9-11",
                "Ломоносов, 7-9, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 7960,
            "y": 3860
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Преобразование звезда-треугольник",
        "data": {
            "section": "электромагнетизм",
            "grade": "8",
            "number": 106,
            "olympiads": [
                "МОШ, 8-11",
                "Росатом, 8-11",
                "Курчатов, 8-11",
                "Физтех, 9-11",
                "Ломоносов, 7-9, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 7960,
            "y": 4060
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Поток электрического поля. Закон Гаусса.",
        "data": {
            "section": "электромагнетизм",
            "grade": "10",
            "number": 107,
            "olympiads": [
                "МОШ, 10-11",
                "Росатом, 10-11",
                "Курчатов, 10-11",
                "Физтех, 10-11",
                "Ломоносов, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 8460,
            "y": 5460
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Рассчёт электрического поля и потенциала",
        "data": {
            "section": "электромагнетизм",
            "grade": "10",
            "number": 108,
            "olympiads": [
                "МОШ, 10-11",
                "Росатом, 10-11",
                "Курчатов, 10-11",
                "Физтех, 10-11",
                "Ломоносов, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 8460,
            "y": 5660
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Принцип суперпозиции",
        "data": {
            "section": "электромагнетизм",
            "grade": "10",
            "number": 109,
            "olympiads": [
                "МОШ, 10-11",
                "Росатом, 10-11",
                "Курчатов, 10-11",
                "Физтех, 10-11",
                "Ломоносов, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 8460,
            "y": 5860
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Проводники в электростатическом поле",
        "data": {
            "section": "электромагнетизм",
            "grade": "10",
            "number": 110,
            "olympiads": [
                "МОШ, 10-11",
                "Росатом, 10-11",
                "Курчатов, 10-11",
                "Физтех, 10-11",
                "Ломоносов, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 8460,
            "y": 6060
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Теорема о единственности",
        "data": {
            "section": "электромагнетизм",
            "grade": "10",
            "number": 111,
            "olympiads": [
                "МОШ, 10-11",
                "Росатом, 10-11",
                "Курчатов, 10-11",
                "Физтех, 10-11",
                "Ломоносов, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 8460,
            "y": 6260
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Метод электростатических изображений",
        "data": {
            "section": "электромагнетизм",
            "grade": "10",
            "number": 112,
            "olympiads": [
                "МОШ, 10-11",
                "Росатом, 10-11",
                "Курчатов, 10-11",
                "Физтех, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 8460,
            "y": 6460
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Энергия систем зарядов",
        "data": {
            "section": "электромагнетизм",
            "grade": "10",
            "number": 113,
            "olympiads": [
                "МОШ, 10-11",
                "Росатом, 10-11",
                "Курчатов, 10-11",
                "Физтех, 10-11",
                "Ломоносов, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 8460,
            "y": 6660
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Диэлектрики в электростатическом поле",
        "data": {
            "section": "электромагнетизм",
            "grade": "10",
            "number": 114,
            "olympiads": [
                "МОШ, 10-11",
                "Росатом, 10-11",
                "Курчатов, 10-11",
                "Физтех, 10-11",
                "Ломоносов, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 8460,
            "y": 6860
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Тур. Электростатика, 10 класс.",
        "data": {
            "section": "электромагнетизм",
            "grade": "10",
            "number": 115,
            "problems": []
        },
        "position": {
            "x": 8460,
            "y": 7060
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Конденсаторы",
        "data": {
            "section": "электромагнетизм",
            "grade": "11",
            "number": 116,
            "olympiads": [
                "МОШ, 10-11",
                "Росатом, 11",
                "Курчатов, 10-11",
                "Физтех, 10-11",
                "Ломоносов, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 8460,
            "y": 7260
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Соединение конденсаторов. Энергия конденсатора.",
        "data": {
            "section": "электромагнетизм",
            "grade": "11",
            "number": 117,
            "olympiads": [
                "МОШ, 10-11",
                "Росатом, 11",
                "Курчатов, 11",
                "Физтех, 10-11",
                "Ломоносов, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 8460,
            "y": 7460
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Объёмная плотность энергии электрического поля",
        "data": {
            "section": "электромагнетизм",
            "grade": "11",
            "number": 118,
            "olympiads": [
                "МОШ, 10-11",
                "Росатом, 11",
                "Курчатов, 11",
                "Физтех, 11",
                "Ломоносов, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 8460,
            "y": 7660
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "RC-цепи",
        "data": {
            "section": "электромагнетизм",
            "grade": "11",
            "number": 119,
            "olympiads": [
                "МОШ, 10-11",
                "Росатом, 11",
                "Курчатов, 10-11",
                "Физтех, 10-11",
                "Ломоносов, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 8460,
            "y": 7860
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Ток в различных средах",
        "data": {
            "section": "электромагнетизм",
            "grade": "11",
            "number": 120,
            "olympiads": [
                "МОШ, 10-11",
                "Росатом, 11",
                "Курчатов, 11",
                "Физтех, 11",
                "Ломоносов, 11"
            ],
            "problems": []
        },
        "position": {
            "x": 8460,
            "y": 8060
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Тур. Электростатика, 11 класс.",
        "data": {
            "section": "электромагнетизм",
            "grade": "11",
            "number": 121,
            "problems": []
        },
        "position": {
            "x": 8460,
            "y": 8260
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Магнитное поле. Сила Лоренца.",
        "data": {
            "section": "электромагнетизм",
            "grade": "11",
            "number": 122,
            "olympiads": [
                "МОШ, 11",
                "Росатом, 11",
                "Курчатов, 11",
                "Физтех, 11",
                "Ломоносов, 11"
            ],
            "problems": []
        },
        "position": {
            "x": 8460,
            "y": 8460
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Сила Ампера. Момент силы Ампера.",
        "data": {
            "section": "электромагнетизм",
            "grade": "11",
            "number": 123,
            "olympiads": [
                "МОШ, 11",
                "Росатом, 11",
                "Курчатов, 11",
                "Физтех, 11",
                "Ломоносов, 11"
            ],
            "problems": []
        },
        "position": {
            "x": 8460,
            "y": 8660
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Закон Био-Савара-Лапласа",
        "data": {
            "section": "электромагнетизм",
            "grade": "11",
            "number": 124,
            "olympiads": [
                "МОШ, 11",
                "Курчатов, 11"
            ],
            "problems": []
        },
        "position": {
            "x": 8460,
            "y": 8860
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Теорема Гаусса для магнитного поля",
        "data": {
            "section": "электромагнетизм",
            "grade": "11",
            "number": 125,
            "olympiads": [
                "МОШ, 11",
                "Росатом, 11",
                "Курчатов, 11",
                "Физтех, 11",
                "Ломоносов, 11"
            ],
            "problems": []
        },
        "position": {
            "x": 8460,
            "y": 9060
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Теорема о циркуляции магнитного поля",
        "data": {
            "section": "электромагнетизм",
            "grade": "11",
            "number": 126,
            "olympiads": [
                "МОШ, 11",
                "Курчатов, 11",
                "Физтех, 11"
            ],
            "problems": []
        },
        "position": {
            "x": 8460,
            "y": 9260
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Закон электромагнитной индукции Фарадея",
        "data": {
            "section": "электромагнетизм",
            "grade": "11",
            "number": 127,
            "olympiads": [
                "МОШ, 11",
                "Росатом, 11",
                "Курчатов, 11",
                "Физтех, 11",
                "Ломоносов, 11"
            ],
            "problems": []
        },
        "position": {
            "x": 8460,
            "y": 9460
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Движущийся проводник в магнитном поле",
        "data": {
            "section": "электромагнетизм",
            "grade": "11",
            "number": 128,
            "olympiads": [
                "МОШ, 11",
                "Росатом, 11",
                "Курчатов, 11",
                "Физтех, 11",
                "Ломоносов, 11"
            ],
            "problems": []
        },
        "position": {
            "x": 8460,
            "y": 9660
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Магнитная гидродинамика",
        "data": {
            "section": "электромагнетизм",
            "grade": "11",
            "number": 129,
            "problems": []
        },
        "position": {
            "x": 8460,
            "y": 9860
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Эффект Холла",
        "data": {
            "section": "электромагнетизм",
            "grade": "11",
            "number": 130,
            "olympiads": [
                "МОШ, 11",
                "Росатом, 11",
                "Курчатов, 11",
                "Физтех, 11",
                "Ломоносов, 11"
            ],
            "problems": []
        },
        "position": {
            "x": 8460,
            "y": 10060
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Самоиндукция",
        "data": {
            "section": "электромагнетизм",
            "grade": "11",
            "number": 131,
            "olympiads": [
                "МОШ, 11",
                "Росатом, 11",
                "Курчатов, 11",
                "Физтех, 11",
                "Ломоносов, 11"
            ],
            "problems": []
        },
        "position": {
            "x": 8460,
            "y": 10260
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Энергия магнитного поля",
        "data": {
            "section": "электромагнетизм",
            "grade": "11",
            "number": 132,
            "olympiads": [
                "МОШ, 11",
                "Росатом, 11",
                "Курчатов, 11",
                "Физтех, 11",
                "Ломоносов, 11"
            ],
            "problems": []
        },
        "position": {
            "x": 8460,
            "y": 10460
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Тур. Электромагнетизм, 11 класс.",
        "data": {
            "section": "электромагнетизм",
            "grade": "11",
            "number": 133,
            "problems": []
        },
        "position": {
            "x": 8460,
            "y": 10660
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Электромагнитные волны",
        "data": {
            "section": "электромагнетизм",
            "grade": "11",
            "number": 134,
            "olympiads": [
                "МОШ, 11"
            ],
            "problems": []
        },
        "position": {
            "x": 7980,
            "y": 10860
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Интерференция и дифракция ЭМ волн",
        "data": {
            "section": "электромагнетизм",
            "grade": "11",
            "number": 135,
            "olympiads": [
                "МОШ, 11",
                "Росатом, 11",
                "Курчатов, 11",
                "Физтех, 11",
                "Ломоносов, 11"
            ],
            "problems": []
        },
        "position": {
            "x": 7980,
            "y": 11060
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Дисперсия",
        "data": {
            "section": "электромагнетизм",
            "grade": "11",
            "number": 136,
            "olympiads": [
                "МОШ, 11"
            ],
            "problems": []
        },
        "position": {
            "x": 8460,
            "y": 11860
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Импульс и энергия фотонов",
        "data": {
            "section": "электромагнетизм",
            "grade": "11",
            "number": 137,
            "olympiads": [
                "МОШ, 11"
            ],
            "problems": []
        },
        "position": {
            "x": 7720,
            "y": 11860
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Фотоэффект",
        "data": {
            "section": "электромагнетизм",
            "grade": "11",
            "number": 138,
            "olympiads": [
                "МОШ, 11"
            ],
            "problems": []
        },
        "position": {
            "x": 7720,
            "y": 12060
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Корпускулярно-волновой дуализм",
        "data": {
            "section": "электромагнетизм",
            "grade": "11",
            "number": 139,
            "olympiads": [],
            "problems": []
        },
        "position": {
            "x": 7720,
            "y": 12260
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Соотношение неопределённостей Гейзенберга",
        "data": {
            "section": "электромагнетизм",
            "grade": "11",
            "number": 140,
            "problems": []
        },
        "position": {
            "x": 7720,
            "y": 12460
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Переменный ток. Импеданс.",
        "data": {
            "section": "электромагнетизм",
            "grade": "11",
            "number": 141,
            "olympiads": [
                "МОШ, 11",
                "Курчатов, 11"
            ],
            "problems": []
        },
        "position": {
            "x": 8460,
            "y": 10860
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Резонанс. Мощность переменного тока",
        "data": {
            "section": "электромагнетизм",
            "grade": "11",
            "number": 142,
            "olympiads": [
                "МОШ, 11",
                "Курчатов, 11"
            ],
            "problems": []
        },
        "position": {
            "x": 8460,
            "y": 11060
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Тур. Переменный ток, 11 класc",
        "data": {
            "section": "электромагнетизм",
            "grade": "11",
            "number": 143,
            "problems": []
        },
        "position": {
            "x": 8460,
            "y": 11260
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Тепловое расширение",
        "data": {
            "section": "термодинамика",
            "grade": "8",
            "number": 144,
            "olympiads": [
                "МОШ, 8-11",
                "Росатом, 8-11",
                "Курчатов, 8-11",
                "Физтех, 9-11",
                "Ломоносов, 7-9, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 9960,
            "y": 1140
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Количество теплоты, внутренняя энергия",
        "data": {
            "section": "термодинамика",
            "grade": "8",
            "number": 145,
            "olympiads": [
                "МОШ, 8-11",
                "Росатом, 8-11",
                "Курчатов, 8-11",
                "Физтех, 9-11",
                "Ломоносов, 7-9, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 10460,
            "y": 940
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Влажность",
        "data": {
            "section": "термодинамика",
            "grade": "8",
            "number": 146,
            "olympiads": [
                "МОШ, 10-11",
                "Росатом, 10-11",
                "Курчатов, 10-11",
                "Физтех, 10-11",
                "Ломоносов, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 10460,
            "y": 1140
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Уравнение теплового баланса",
        "data": {
            "section": "термодинамика",
            "grade": "8",
            "number": 147,
            "olympiads": [
                "МОШ, 8-11",
                "Росатом, 8-11",
                "Курчатов, 8-11",
                "Физтех, 9-11",
                "Ломоносов, 7-9, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 10960,
            "y": 1140
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Внешние источники теплоты. Теплопотери.",
        "data": {
            "section": "термодинамика",
            "grade": "8",
            "number": 148,
            "olympiads": [
                "МОШ, 8-11",
                "Росатом, 8-11",
                "Курчатов, 8-11",
                "Физтех, 9-11",
                "Ломоносов, 7-9, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 10960,
            "y": 1320
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Теплопроводность. Закон Ньютона-Рихмана.",
        "data": {
            "section": "термодинамика",
            "grade": "8",
            "number": 149,
            "olympiads": [
                "МОШ, 8-11",
                "Росатом, 8-11",
                "Курчатов, 8-11",
                "Физтех, 9-11",
                "Ломоносов, 7-9, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 10960,
            "y": 1520
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Тур. Термодинамика, 8 класс.",
        "data": {
            "section": "термодинамика",
            "grade": "8",
            "number": 150,
            "problems": []
        },
        "position": {
            "x": 10460,
            "y": 1920
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Длина свободного пробега",
        "data": {
            "section": "термодинамика",
            "grade": "10",
            "number": 151,
            "problems": []
        },
        "position": {
            "x": 10460,
            "y": 2120
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Уравнение Клапейрона-Менделеева",
        "data": {
            "section": "термодинамика",
            "grade": "10",
            "number": 152,
            "olympiads": [
                "МОШ, 10-11",
                "Росатом, 10-11",
                "Курчатов, 10-11",
                "Физтех, 10-11",
                "Ломоносов, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 10460,
            "y": 2320
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Работа, внутренняя энергия. Первое начало термодинамики.",
        "data": {
            "section": "термодинамика",
            "grade": "10",
            "number": 153,
            "olympiads": [
                "МОШ, 10-11",
                "Росатом, 10-11",
                "Курчатов, 10-11",
                "Физтех, 10-11",
                "Ломоносов, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 10460,
            "y": 2520
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Адиабатический процесс",
        "data": {
            "section": "термодинамика",
            "grade": "10",
            "number": 154,
            "olympiads": [
                "МОШ, 10-11",
                "Росатом, 10-11",
                "Курчатов, 10-11",
                "Физтех, 10-11",
                "Ломоносов, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 10460,
            "y": 2720
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Политропический процесс",
        "data": {
            "section": "термодинамика",
            "grade": "10",
            "number": 155,
            "olympiads": [
                "МОШ, 10-11",
                "Росатом, 10-11",
                "Курчатов, 10-11",
                "Физтех, 10-11",
                "Ломоносов, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 10460,
            "y": 2920
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Термодинамические циклы",
        "data": {
            "section": "термодинамика",
            "grade": "10",
            "number": 156,
            "olympiads": [
                "МОШ, 10-11",
                "Росатом, 10-11",
                "Курчатов, 10-11",
                "Физтех, 10-11",
                "Ломоносов, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 10460,
            "y": 3120
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Второе начало термодинамики. Две формулировки.",
        "data": {
            "section": "термодинамика",
            "grade": "10",
            "number": 157,
            "olympiads": [
                "МОШ, 10-11",
                "Росатом, 10-11",
                "Курчатов, 10-11",
                "Физтех, 10-11",
                "Ломоносов, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 10460,
            "y": 3320
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Цикл Карно",
        "data": {
            "section": "термодинамика",
            "grade": "10",
            "number": 158,
            "olympiads": [
                "МОШ, 10-11",
                "Росатом, 10-11",
                "Курчатов, 10-11",
                "Физтех, 10-11",
                "Ломоносов, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 10460,
            "y": 3520
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Теоремы Карно",
        "data": {
            "section": "термодинамика",
            "grade": "10",
            "number": 159,
            "olympiads": [
                "МОШ, 10-11",
                "Росатом, 10-11",
                "Курчатов, 10-11",
                "Физтех, 10-11",
                "Ломоносов, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 10460,
            "y": 3720
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Неравенство Клаузиуса",
        "data": {
            "section": "термодинамика",
            "grade": "10",
            "number": 160,
            "olympiads": [
                "МОШ, 10-11",
                "Росатом, 10-11",
                "Курчатов, 10-11",
                "Физтех, 10-11",
                "Ломоносов, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 10100,
            "y": 4200
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Энтропия",
        "data": {
            "section": "термодинамика",
            "grade": "10",
            "number": 161,
            "olympiads": [
                "МОШ, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 10100,
            "y": 4600
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Влажный воздух",
        "data": {
            "section": "термодинамика",
            "grade": "10",
            "number": 162,
            "olympiads": [
                "МОШ, 10-11",
                "Росатом, 10-11",
                "Курчатов, 10-11",
                "Физтех, 10-11",
                "Ломоносов, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 10800,
            "y": 4200
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Уравнение Клапейрона-Клаузиуса",
        "data": {
            "section": "термодинамика",
            "grade": "10",
            "number": 163,
            "problems": []
        },
        "position": {
            "x": 10800,
            "y": 4400
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Неидеальные газы",
        "data": {
            "section": "термодинамика",
            "grade": "10",
            "number": 164,
            "olympiads": [
                "МОШ, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 10800,
            "y": 4600
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Тур. Термодинамика, 10 класс.",
        "data": {
            "section": "термодинамика",
            "grade": "10",
            "number": 165,
            "problems": []
        },
        "position": {
            "x": 10460,
            "y": 5100
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Поверхностное натяжение",
        "data": {
            "section": "термодинамика",
            "grade": "11",
            "number": 166,
            "olympiads": [
                "МОШ, 10-11"
            ],
            "problems": []
        },
        "position": {
            "x": 10460,
            "y": 5300
        },
        "width": 320,
        "height": 300
    },
    {
        "id": "Равновесное тепловое излучение",
        "data": {
            "section": "термодинамика",
            "grade": "11",
            "number": 167,
            "problems": []
        },
        "position": {
            "x": 10460,
            "y": 5500
        },
        "width": 320,
        "height": 300
    }
];
const rawEdges = [
    {
        id: "e0",
        source: "TheSolution",
        target: "Равномерное прямолинейное движение"
    },
    {
        id: "e1",
        source: "TheSolution",
        target: "Плотность"
    },
    {
        id: "e2",
        source: "TheSolution",
        target: "Работа с графиками"
    },
    {
        id: "e3",
        source: "TheSolution",
        target: "Электрический заряд. Закон Кулона."
    },
    {
        id: "e4",
        source: "TheSolution",
        target: "Температура. Связь температуры с кинетической энергией движения молекул."
    },
    {
        id: "e5",
        source: "TheSolution",
        target: "Тень. Полутень."
    },
    {
        id: "e6",
        source: "Равномерное прямолинейное движение",
        target: "Средняя скорость. Относительное движение."
    },
    {
        id: "e7",
        source: "Средняя скорость. Относительное движение.",
        target: "Кинематические связи. Блоки."
    },
    {
        id: "e8",
        source: "Кинематические связи. Блоки.",
        target: "Закон Гука. Системы пружин."
    },
    {
        id: "e9",
        source: "Плотность",
        target: "Сила. Третий закон Ньютона."
    },
    {
        id: "e10",
        source: "Сила. Третий закон Ньютона.",
        target: "Сила тяжести"
    },
    {
        id: "e11",
        source: "Сила тяжести",
        target: "Закон Гука. Системы пружин."
    },
    {
        id: "e12",
        source: "Сила тяжести",
        target: "Давление. Сообщающиеся сосуды"
    },
    {
        id: "e13",
        source: "Закон Гука. Системы пружин.",
        target: "Моменты"
    },
    {
        id: "e14",
        source: "Моменты",
        target: "Работа. Мощность. КПД"
    },
    {
        id: "e15",
        source: "Моменты",
        target: "Системы блоков. Статика со связями."
    },
    {
        id: "e16",
        source: "Давление. Сообщающиеся сосуды",
        target: "Сила Архимеда"
    },
    {
        id: "e17",
        source: "Работа. Мощность. КПД",
        target: "Тур. Механика, 7 класс."
    },
    {
        id: "e18",
        source: "Системы блоков. Статика со связями.",
        target: "Тур. Механика, 7 класс."
    },
    {
        id: "e19",
        source: "Сила Архимеда",
        target: "Тур. Механика, 7 класс."
    },
    {
        id: "e20",
        source: "Тур. Механика, 7 класс.",
        target: "Энергия"
    },
    {
        id: "e21",
        source: "Тур. Механика, 7 класс.",
        target: "Движение со связями"
    },
    {
        id: "e22",
        source: "Тур. Механика, 7 класс.",
        target: "Равноускоренное движение"
    },
    {
        id: "e23",
        source: "Тур. Механика, 7 класс.",
        target: "Конус Маха"
    },
    {
        id: "e24",
        source: "Тур. Механика, 7 класс.",
        target: "Упругие столкновения с тяжёлой стенкой"
    },
    {
        id: "e25",
        source: "Энергия",
        target: "Метод виртуальных перемещений"
    },
    {
        id: "e26",
        source: "Энергия",
        target: "Бернулли"
    },
    {
        id: "e27",
        source: "Энергия",
        target: "Устойчивость равновесия"
    },
    {
        id: "e28",
        source: "Энергия",
        target: "Теорема Кёнига"
    },
    {
        id: "e29",
        source: "Динамика. Второй закон Ньютона.",
        target: "Теорема Кёнига"
    },
    {
        id: "e30",
        source: "Движение со связями",
        target: "Мгновенный центр вращения"
    },
    {
        id: "e31",
        source: "Мгновенный центр вращения",
        target: "Теорема Кёнига"
    },
    {
        id: "e32",
        source: "Равноускоренное движение",
        target: "Равномерное движение по окружности"
    },
    {
        id: "e33",
        source: "Равноускоренное движение",
        target: "Баллистика. Координатный метод."
    },
    {
        id: "e34",
        source: "Баллистика. Координатный метод.",
        target: "Баллистика. Векторный метод."
    },
    {
        id: "e35",
        source: "Баллистика. Векторный метод.",
        target: "Тур. Баллистика, 9 класс."
    },
    {
        id: "e36",
        source: "Равномерное движение по окружности",
        target: "Центростремительное ускорение"
    },
    {
        id: "e37",
        source: "Центростремительное ускорение",
        target: "Неравномерное движение по окружности"
    },
    {
        id: "e38",
        source: "Неравномерное движение по окружности",
        target: "Динамика. Второй закон Ньютона."
    },
    {
        id: "e39",
        source: "Динамика. Второй закон Ньютона.",
        target: "Всемирное тяготение. Космические скорости."
    },
    {
        id: "e40",
        source: "Динамика. Второй закон Ньютона.",
        target: "Неинерциальные системы отсчёта"
    },
    {
        id: "e41",
        source: "Динамика. Второй закон Ньютона.",
        target: "Сухое трение"
    },
    {
        id: "e42",
        source: "Динамика. Второй закон Ньютона.",
        target: "Импульс"
    },
    {
        id: "e43",
        source: "Неинерциальные системы отсчёта",
        target: "Вращательные НеИСО"
    },
    {
        id: "e44",
        source: "Сухое трение",
        target: "Вязкое трение"
    },
    {
        id: "e46",
        source: "Импульс",
        target: "Реактивная сила"
    },
    {
        id: "e47",
        source: "Импульс",
        target: "Столкновения"
    },
    {
        id: "e48",
        source: "Столкновения",
        target: "Тур. Законы сохранения, 9 класс."
    },
    {
        id: "e49",
        source: "Реактивная сила",
        target: "Тур. Законы сохранения, 9 класс."
    },
    {
        id: "e50",
        source: "Всемирное тяготение. Космические скорости.",
        target: "Тур. Динамика, 9 класс."
    },
    {
        id: "e51",
        source: "Вращательные НеИСО",
        target: "Тур. Динамика, 9 класс."
    },
    {
        id: "e52",
        source: "Сухое трение",
        target: "Тур. Динамика, 9 класс."
    },
    {
        id: "e53",
        source: "Тур. Динамика, 9 класс.",
        target: "Момент импульса"
    },
    {
        id: "e54",
        source: "Тур. Законы сохранения, 9 класс.",
        target: "Момент импульса"
    },
    {
        id: "e55",
        source: "Момент импульса",
        target: "Момент инерции"
    },
    {
        id: "e56",
        source: "Момент импульса",
        target: "Гравитация. Законы Кеплера."
    },
    {
        id: "e57",
        source: "Момент инерции",
        target: "Тур. Механика, 11 класс."
    },
    {
        id: "e58",
        source: "Гравитация. Законы Кеплера.",
        target: "Тур. Механика, 11 класс."
    },
    {
        id: "e59",
        source: "Устойчивость равновесия",
        target: "Гармонические колебания"
    },
    {
        id: "e60",
        source: "Гармонические колебания",
        target: "Энергия в гармонических колебаниях"
    },
    {
        id: "e61",
        source: "Энергия в гармонических колебаниях",
        target: "Затухающие колебания"
    },
    {
        id: "e62",
        source: "Затухающие колебания",
        target: "Резонанс"
    },
    {
        id: "e63",
        source: "Резонанс",
        target: "Сложение колебаний. Биения."
    },
    {
        id: "e64",
        source: "Сложение колебаний. Биения.",
        target: "Тур. Колебания, 11 класс"
    },
    {
        id: "e65",
        source: "Сложение колебаний. Биения.",
        target: "Механические волны"
    },
    {
        id: "e66",
        source: "Сложение колебаний. Биения.",
        target: "Постулаты специальной теории относительности"
    },
    {
        id: "e67",
        source: "Механические волны",
        target: "Эффект Доплера"
    },
    {
        id: "e68",
        source: "Постулаты специальной теории относительности",
        target: "Парадоксы и эффекты"
    },
    {
        id: "e69",
        source: "Парадоксы и эффекты",
        target: "Релятивистская динамика"
    },
    {
        id: "e70",
        source: "Работа с графиками",
        target: "Тригонометрия"
    },
    {
        id: "e71",
        source: "Тригонометрия",
        target: "Векторы"
    },
    {
        id: "e72",
        source: "Векторы",
        target: "Свойства тригонометрических функций"
    },
    {
        id: "e73",
        source: "Свойства тригонометрических функций",
        target: "Дифференцирование"
    },
    {
        id: "e74",
        source: "Дифференцирование",
        target: "Интегрирование"
    },
    {
        id: "e75",
        source: "Интегрирование",
        target: "Логарифмы, показательные функции"
    },
    {
        id: "e76",
        source: "Логарифмы, показательные функции",
        target: "Работа с малыми величинами"
    },
    {
        id: "e77",
        source: "Работа с малыми величинами",
        target: "Телесный угол"
    },
    {
        id: "e78",
        source: "Телесный угол",
        target: "Векторное произведение"
    },
    {
        id: "e79",
        source: "Векторное произведение",
        target: "Дифференциальные уравнения. Уравнения колебаний."
    },
    {
        id: "e80",
        source: "Дифференциальные уравнения. Уравнения колебаний.",
        target: "Ряды"
    },
    {
        id: "e81",
        source: "Ряды",
        target: "Комплексные числа"
    },
    {
        id: "e82",
        source: "Тень. Полутень.",
        target: "Отражение света. Зеркала."
    },
    {
        id: "e83",
        source: "Отражение света. Зеркала.",
        target: "Преломление света. Закон Снеллиуса."
    },
    {
        id: "e84",
        source: "Преломление света. Закон Снеллиуса.",
        target: "Пластины, призмы"
    },
    {
        id: "e85",
        source: "Пластины, призмы",
        target: "Полное внутреннее отражение"
    },
    {
        id: "e86",
        source: "Полное внутреннее отражение",
        target: "Линза, построение изображений"
    },
    {
        id: "e87",
        source: "Линза, построение изображений",
        target: "Формула тонкой линзы"
    },
    {
        id: "e88",
        source: "Формула тонкой линзы",
        target: "Увеличение"
    },
    {
        id: "e89",
        source: "Увеличение",
        target: "Оптические системы"
    },
    {
        id: "e90",
        source: "Оптические системы",
        target: "Тур. Оптика, 10 класс."
    },
    {
        id: "e91",
        source: "Тур. Оптика, 10 класс.",
        target: "Дисперсия"
    },
    {
        id: "e92",
        source: "Дисперсия",
        target: "Интерференция света. Когерентные источники."
    },
    {
        id: "e93",
        source: "Интерференция света. Когерентные источники.",
        target: "Интерференция света. Временная когерентность."
    },
    {
        id: "e94",
        source: "Интерференция света. Временная когерентность.",
        target: "Дифракция Фраунгофера"
    },
    {
        id: "e95",
        source: "Дифракция Фраунгофера",
        target: "Дифракция Френеля"
    },
    {
        id: "e96",
        source: "Дифракция Френеля",
        target: "Дифракционная решётка"
    },
    {
        id: "e97",
        source: "Дифракционная решётка",
        target: "Поляризация света"
    },
    {
        id: "e98",
        source: "Поляризация света",
        target: "Тур. Волновая оптика, 11 класс"
    },
    {
        id: "e99",
        source: "Электрический заряд. Закон Кулона.",
        target: "Напряжённость электрического поля, потенциал"
    },
    {
        id: "e100",
        source: "Напряжённость электрического поля, потенциал",
        target: "Сила тока, напряжение. Закон Ома."
    },
    {
        id: "e101",
        source: "Сила тока, напряжение. Закон Ома.",
        target: "Мощность электрического тока"
    },
    {
        id: "e103",
        source: "Сила тока, напряжение. Закон Ома.",
        target: "Параллельное и последовательное соединения резисторов"
    },
    {
        id: "e104",
        source: "Мощность электрического тока",
        target: "Тур. Электричество, 8 класс."
    },
    {
        id: "e105",
        source: "Теорема Кёнига",
        target: "Тур. Движение твёрдого тела, 9 класс"
    },
    {
        id: "e106",
        source: "Параллельное и последовательное соединения резисторов",
        target: "Правила Кирхгофа"
    },
    {
        id: "e107",
        source: "Правила Кирхгофа",
        target: "Симметричные цепи"
    },
    {
        id: "e108",
        source: "Правила Кирхгофа",
        target: "Источники тока"
    },
    {
        id: "e109",
        source: "Симметричные цепи",
        target: "Метод наложения токов"
    },
    {
        id: "e110",
        source: "Источники тока",
        target: "Метод эквивалентного источника"
    },
    {
        id: "e111",
        source: "Источники тока",
        target: "Измерительные приборы"
    },
    {
        id: "e112",
        source: "Измерительные приборы",
        target: "Вольтамперная характеристика"
    },
    {
        id: "e113",
        source: "Измерительные приборы",
        target: "Мостовые схемы"
    },
    {
        id: "e114",
        source: "Мостовые схемы",
        target: "Преобразование звезда-треугольник"
    },
    {
        id: "e115",
        source: "Бесконечные цепи",
        target: "Тур. Электричество, 8 класс."
    },
    {
        id: "e116",
        source: "Метод эквивалентного источника",
        target: "Тур. Электричество, 8 класс."
    },
    {
        id: "e117",
        source: "Вольтамперная характеристика",
        target: "Тур. Электричество, 8 класс."
    },
    {
        id: "e118",
        source: "Преобразование звезда-треугольник",
        target: "Тур. Электричество, 8 класс."
    },
    {
        id: "e119",
        source: "Тур. Электричество, 8 класс.",
        target: "Поток электрического поля. Закон Гаусса."
    },
    {
        id: "e120",
        source: "Поток электрического поля. Закон Гаусса.",
        target: "Рассчёт электрического поля и потенциала"
    },
    {
        id: "e121",
        source: "Рассчёт электрического поля и потенциала",
        target: "Принцип суперпозиции"
    },
    {
        id: "e122",
        source: "Принцип суперпозиции",
        target: "Проводники в электростатическом поле"
    },
    {
        id: "e123",
        source: "Проводники в электростатическом поле",
        target: "Теорема о единственности"
    },
    {
        id: "e124",
        source: "Теорема о единственности",
        target: "Метод электростатических изображений"
    },
    {
        id: "e125",
        source: "Метод электростатических изображений",
        target: "Энергия систем зарядов"
    },
    {
        id: "e126",
        source: "Энергия систем зарядов",
        target: "Диэлектрики в электростатическом поле"
    },
    {
        id: "e127",
        source: "Диэлектрики в электростатическом поле",
        target: "Тур. Электростатика, 10 класс."
    },
    {
        id: "e128",
        source: "Тур. Электростатика, 10 класс.",
        target: "Конденсаторы"
    },
    {
        id: "e129",
        source: "Конденсаторы",
        target: "Соединение конденсаторов. Энергия конденсатора."
    },
    {
        id: "e130",
        source: "Соединение конденсаторов. Энергия конденсатора.",
        target: "Объёмная плотность энергии электрического поля"
    },
    {
        id: "e131",
        source: "Объёмная плотность энергии электрического поля",
        target: "RC-цепи"
    },
    {
        id: "e132",
        source: "RC-цепи",
        target: "Ток в различных средах"
    },
    {
        id: "e133",
        source: "Ток в различных средах",
        target: "Тур. Электростатика, 11 класс."
    },
    {
        id: "e134",
        source: "Тур. Электростатика, 11 класс.",
        target: "Магнитное поле. Сила Лоренца."
    },
    {
        id: "e135",
        source: "Магнитное поле. Сила Лоренца.",
        target: "Сила Ампера. Момент силы Ампера."
    },
    {
        id: "e136",
        source: "Сила Ампера. Момент силы Ампера.",
        target: "Закон Био-Савара-Лапласа"
    },
    {
        id: "e137",
        source: "Закон Био-Савара-Лапласа",
        target: "Теорема Гаусса для магнитного поля"
    },
    {
        id: "e138",
        source: "Теорема Гаусса для магнитного поля",
        target: "Теорема о циркуляции магнитного поля"
    },
    {
        id: "e139",
        source: "Теорема о циркуляции магнитного поля",
        target: "Закон электромагнитной индукции Фарадея"
    },
    {
        id: "e140",
        source: "Закон электромагнитной индукции Фарадея",
        target: "Движущийся проводник в магнитном поле"
    },
    {
        id: "e141",
        source: "Движущийся проводник в магнитном поле",
        target: "Магнитная гидродинамика"
    },
    {
        id: "e142",
        source: "Магнитная гидродинамика",
        target: "Эффект Холла"
    },
    {
        id: "e143",
        source: "Эффект Холла",
        target: "Самоиндукция"
    },
    {
        id: "e144",
        source: "Самоиндукция",
        target: "Энергия магнитного поля"
    },
    {
        id: "e145",
        source: "Энергия магнитного поля",
        target: "Тур. Электромагнетизм, 11 класс."
    },
    {
        id: "e146",
        source: "Тур. Электромагнетизм, 11 класс.",
        target: "Электромагнитные волны"
    },
    {
        id: "e147",
        source: "Тур. Электромагнетизм, 11 класс.",
        target: "Переменный ток. Импеданс."
    },
    {
        id: "e148",
        source: "Электромагнитные волны",
        target: "Интерференция и дифракция ЭМ волн"
    },
    {
        id: "e149",
        source: "Интерференция и дифракция ЭМ волн",
        target: "Дисперсия"
    },
    {
        id: "e150",
        source: "Интерференция и дифракция ЭМ волн",
        target: "Импульс и энергия фотонов"
    },
    {
        id: "e151",
        source: "Импульс и энергия фотонов",
        target: "Фотоэффект"
    },
    {
        id: "e152",
        source: "Фотоэффект",
        target: "Корпускулярно-волновой дуализм"
    },
    {
        id: "e153",
        source: "Корпускулярно-волновой дуализм",
        target: "Соотношение неопределённостей Гейзенберга"
    },
    {
        id: "e154",
        source: "Переменный ток. Импеданс.",
        target: "Резонанс. Мощность переменного тока"
    },
    {
        id: "e155",
        source: "Резонанс. Мощность переменного тока",
        target: "Тур. Переменный ток, 11 класc"
    },
    {
        id: "e156",
        source: "Температура. Связь температуры с кинетической энергией движения молекул.",
        target: "Тепловое расширение"
    },
    {
        id: "e157",
        source: "Температура. Связь температуры с кинетической энергией движения молекул.",
        target: "Количество теплоты, внутренняя энергия"
    },
    {
        id: "e158",
        source: "Количество теплоты, внутренняя энергия",
        target: "Влажность"
    },
    {
        id: "e159",
        source: "Количество теплоты, внутренняя энергия",
        target: "Уравнение теплового баланса"
    },
    {
        id: "e160",
        source: "Уравнение теплового баланса",
        target: "Внешние источники теплоты. Теплопотери."
    },
    {
        id: "e161",
        source: "Внешние источники теплоты. Теплопотери.",
        target: "Теплопроводность. Закон Ньютона-Рихмана."
    },
    {
        id: "e162",
        source: "Теплопроводность. Закон Ньютона-Рихмана.",
        target: "Тур. Термодинамика, 8 класс."
    },
    {
        id: "e163",
        source: "Влажность",
        target: "Тур. Термодинамика, 8 класс."
    },
    {
        id: "e164",
        source: "Тепловое расширение",
        target: "Тур. Термодинамика, 8 класс."
    },
    {
        id: "e165",
        source: "Тур. Термодинамика, 8 класс.",
        target: "Длина свободного пробега"
    },
    {
        id: "e166",
        source: "Длина свободного пробега",
        target: "Уравнение Клапейрона-Менделеева"
    },
    {
        id: "e167",
        source: "Уравнение Клапейрона-Менделеева",
        target: "Работа, внутренняя энергия. Первое начало термодинамики."
    },
    {
        id: "e168",
        source: "Работа, внутренняя энергия. Первое начало термодинамики.",
        target: "Адиабатический процесс"
    },
    {
        id: "e169",
        source: "Адиабатический процесс",
        target: "Политропический процесс"
    },
    {
        id: "e170",
        source: "Политропический процесс",
        target: "Термодинамические циклы"
    },
    {
        id: "e171",
        source: "Термодинамические циклы",
        target: "Второе начало термодинамики. Две формулировки."
    },
    {
        id: "e172",
        source: "Второе начало термодинамики. Две формулировки.",
        target: "Цикл Карно"
    },
    {
        id: "e173",
        source: "Цикл Карно",
        target: "Теоремы Карно"
    },
    {
        id: "e174",
        source: "Теоремы Карно",
        target: "Неравенство Клаузиуса"
    },
    {
        id: "e175",
        source: "Теоремы Карно",
        target: "Влажный воздух"
    },
    {
        id: "e176",
        source: "Неравенство Клаузиуса",
        target: "Энтропия"
    },
    {
        id: "e177",
        source: "Влажный воздух",
        target: "Уравнение Клапейрона-Клаузиуса"
    },
    {
        id: "e178",
        source: "Уравнение Клапейрона-Клаузиуса",
        target: "Неидеальные газы"
    },
    {
        id: "e179",
        source: "Неидеальные газы",
        target: "Тур. Термодинамика, 10 класс."
    },
    {
        id: "e180",
        source: "Энтропия",
        target: "Тур. Термодинамика, 10 класс."
    },
    {
        id: "e181",
        source: "Тур. Термодинамика, 10 класс.",
        target: "Поверхностное натяжение"
    },
    {
        id: "e182",
        source: "Поверхностное натяжение",
        target: "Равновесное тепловое излучение"
    },
    {
        id: "e183",
        source: "Сила тяжести",
        target: "Трение"
    },
    {
        id: "e184",
        source: "Трение",
        target: "Тур. Механика, 7 класс."
    },
    {
        id: "e185",
        source: "Метод наложения токов",
        target: "Бесконечные цепи"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/constants/movement.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "MINIMAL_DELTA": (()=>MINIMAL_DELTA)
});
const MINIMAL_DELTA = 20;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/utils/persistence.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "applyStoredChanges": (()=>applyStoredChanges),
    "applyStoredEdgeChanges": (()=>applyStoredEdgeChanges),
    "exportUpdatedGraphContent": (()=>exportUpdatedGraphContent),
    "loadEdgeChanges": (()=>loadEdgeChanges),
    "loadNodeChanges": (()=>loadNodeChanges),
    "saveEdgeChanges": (()=>saveEdgeChanges),
    "saveNodeChanges": (()=>saveNodeChanges)
});
const STORAGE_KEY = "graph_node_changes";
const EDGE_STORAGE_KEY = "graph_edge_changes";
const saveNodeChanges = (nodes)=>{
    const changes = {};
    nodes.forEach((node)=>{
        if (node.position || node.width || node.height) {
            changes[node.id] = {
                position: node.position,
                width: node.width,
                height: node.height
            };
        }
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(changes));
};
const loadNodeChanges = ()=>{
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : {};
    } catch (error) {
        console.error("Failed to load node changes:", error);
        return {};
    }
};
const applyStoredChanges = (nodes)=>{
    const storedChanges = loadNodeChanges();
    return nodes.map((node)=>{
        const changes = storedChanges[node.id];
        if (changes) {
            return {
                ...node,
                position: changes.position || node.position,
                width: changes.width || node.width,
                height: changes.height || node.height
            };
        }
        return node;
    });
};
const exportUpdatedGraphContent = (nodes)=>{
    const updatedNodes = nodes.map((node)=>({
            id: node.id,
            data: node.data,
            position: node.position,
            width: node.width,
            height: node.height
        }));
    return `export const rawNodes = ${JSON.stringify(updatedNodes, null, 2)};`;
};
const saveEdgeChanges = (edges)=>{
    const changes = {};
    edges.forEach((edge)=>{
        changes[edge.id] = {
            ...edge.data
        };
    });
    localStorage.setItem(EDGE_STORAGE_KEY, JSON.stringify(changes));
};
const loadEdgeChanges = ()=>{
    try {
        const stored = localStorage.getItem(EDGE_STORAGE_KEY);
        return stored ? JSON.parse(stored) : {};
    } catch (error) {
        console.error("Failed to load edge changes:", error);
        return {};
    }
};
const applyStoredEdgeChanges = (edges)=>{
    const storedChanges = loadEdgeChanges();
    return edges.map((edge)=>{
        const changes = storedChanges[edge.id];
        if (changes) {
            return {
                ...edge,
                data: {
                    ...edge.data,
                    ...changes
                }
            };
        }
        return edge;
    });
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>LectureTree)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reactflow$2f$core$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ReactFlow__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/@reactflow/core/dist/esm/index.mjs [app-client] (ecmascript) <export ReactFlow as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reactflow$2f$controls$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@reactflow/controls/dist/esm/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reactflow$2f$background$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@reactflow/background/dist/esm/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reactflow$2f$core$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@reactflow/core/dist/esm/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dagre$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/dagre/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CustomNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CustomNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CustomEdge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CustomEdge.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ThemeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/ThemeContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/theme/theme.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$_lib$2f$graphContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/_lib/graphContent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$movement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/movement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$persistence$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/persistence.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
const FlowContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  width: 100vw;
  height: 100vh;
`;
_c = FlowContainer;
const ExportButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  padding: 10px 20px;
  background: #0066ff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background: #0052cc;
  }
`;
_c1 = ExportButton;
const ResetButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button`
  position: fixed;
  top: 20px;
  right: 160px;
  z-index: 1000;
  padding: 10px 20px;
  background: #dc3545;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background: #c82333;
  }
`;
_c2 = ResetButton;
const dagreGraph = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dagre$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(()=>({}));
const nodeWidth = 320;
const nodeHeight = 300; // Increased to make vertical layout more obvious
const theSolutionWidth = 600;
const theSolutionHeight = 400;
// layout-функция
function getLayoutedElements(nodes, edges, direction = "TB") {
    console.log("=== LAYOUT DEBUG ===");
    console.log("Layout direction:", direction);
    dagreGraph.setGraph({
        rankdir: direction,
        nodesep: 400,
        ranksep: 200
    });
    console.log("Dagre graph settings:", dagreGraph.graph());
    nodes.forEach((n)=>{
        const isTheSolution = n.id === "TheSolution";
        const width = isTheSolution ? theSolutionWidth : nodeWidth;
        const height = isTheSolution ? theSolutionHeight : nodeHeight;
        dagreGraph.setNode(n.id, {
            width,
            height
        });
    });
    edges.forEach((e)=>dagreGraph.setEdge(e.source, e.target));
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dagre$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].layout(dagreGraph);
    console.log("Raw Dagre positions (first 5 nodes):");
    nodes.slice(0, 5).forEach((n)=>{
        const dagreNode = dagreGraph.node(n.id);
        console.log(`${n.id}: x=${dagreNode.x}, y=${dagreNode.y}`);
    });
    const laidOutNodes = nodes.map((n)=>{
        const isTheSolution = n.id === "TheSolution";
        const width = isTheSolution ? theSolutionWidth : nodeWidth;
        const height = isTheSolution ? theSolutionHeight : nodeHeight;
        // Use manual position if present, otherwise use Dagre
        let position;
        if (n.position && typeof n.position.x === "number" && typeof n.position.y === "number") {
            position = n.position;
        } else {
            const { x, y } = dagreGraph.node(n.id);
            position = {
                x: x - width / 2,
                y: y - height / 2
            };
        }
        return {
            ...n,
            type: "custom",
            position,
            width,
            height
        };
    });
    console.log("Final node positions (first 5 nodes):");
    laidOutNodes.slice(0, 5).forEach((n)=>{
        console.log(`${n.id}: x=${n.position.x}, y=${n.position.y}, hasManualPos=${!!n.position}`);
    });
    // Find TheSolution and show its position
    const theSolutionNode = laidOutNodes.find((n)=>n.id === "TheSolution");
    if (theSolutionNode) {
        console.log("TheSolution position:", theSolutionNode.position);
    }
    // Add node data to edges for custom styling
    const laidOutEdges = edges.map((edge)=>{
        const sourceNode = laidOutNodes.find((n)=>n.id === edge.source);
        const targetNode = laidOutNodes.find((n)=>n.id === edge.target);
        return {
            ...edge,
            type: "custom",
            data: {
                sourceNode,
                targetNode
            }
        };
    });
    console.log("=== END LAYOUT DEBUG ===");
    return {
        nodes: laidOutNodes,
        edges: laidOutEdges
    };
}
const nodeTypes = {
    custom: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CustomNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
};
const edgeTypes = {
    custom: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CustomEdge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
};
function LectureTree() {
    _s();
    const reactFlowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const reactFlowInstanceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [{ nodes: initNodes, edges: initEdges }, setLayout] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        nodes: [],
        edges: []
    });
    const [nodes, setNodes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [edges, setEdges] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedNodes, setSelectedNodes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isNodeDragging, setIsNodeDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const hasCenteredRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const handleBlockWhileDragging = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LectureTree.useCallback[handleBlockWhileDragging]": (e)=>{
            if (isNodeDragging) {
                e.preventDefault();
                e.stopPropagation();
            }
        }
    }["LectureTree.useCallback[handleBlockWhileDragging]"], [
        isNodeDragging
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LectureTree.useEffect": ()=>{
            const el = containerRef.current;
            if (!el) return;
            const blocker = {
                "LectureTree.useEffect.blocker": (e)=>{
                    if (isNodeDragging) {
                        e.preventDefault();
                        e.stopPropagation();
                    }
                }
            }["LectureTree.useEffect.blocker"];
            const opts = {
                passive: false,
                capture: true
            };
            el.addEventListener('wheel', blocker, opts);
            el.addEventListener('touchmove', blocker, opts);
            // Safari-specific pinch events
            el.addEventListener('gesturestart', blocker, opts);
            el.addEventListener('gesturechange', blocker, opts);
            return ({
                "LectureTree.useEffect": ()=>{
                    el.removeEventListener('wheel', blocker, opts);
                    el.removeEventListener('touchmove', blocker, opts);
                    el.removeEventListener('gesturestart', blocker, opts);
                    el.removeEventListener('gesturechange', blocker, opts);
                }
            })["LectureTree.useEffect"];
        }
    }["LectureTree.useEffect"], [
        isNodeDragging
    ]);
    // Always use Dagre layout, ignore manual positions for now
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LectureTree.useEffect": ()=>{
            // const nodesWithStoredChanges = applyStoredChanges(rawNodes);
            const { nodes: ln, edges: le } = getLayoutedElements(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$_lib$2f$graphContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rawNodes"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$_lib$2f$graphContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rawEdges"], "TB");
            setLayout({
                nodes: ln,
                edges: le
            });
        }
    }["LectureTree.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LectureTree.useEffect": ()=>{
            setNodes(initNodes);
            setEdges(initEdges);
        }
    }["LectureTree.useEffect"], [
        initNodes,
        initEdges
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LectureTree.useEffect": ()=>{
            if (!hasCenteredRef.current && nodes.length > 0 && reactFlowInstanceRef.current) {
                const theSolutionNode = nodes.find({
                    "LectureTree.useEffect.theSolutionNode": (node)=>node.id === "TheSolution"
                }["LectureTree.useEffect.theSolutionNode"]);
                if (theSolutionNode) {
                    setTimeout({
                        "LectureTree.useEffect": ()=>{
                            // Set zoom to show more of the vertical layout
                            const zoom = 0.6; // Lower zoom to see more nodes
                            const { setCenter } = reactFlowInstanceRef.current;
                            setCenter(theSolutionNode.position.x + theSolutionWidth / 2, theSolutionNode.position.y + theSolutionHeight / 2 + 200, {
                                zoom,
                                duration: 1000
                            });
                            hasCenteredRef.current = true;
                        }
                    }["LectureTree.useEffect"], 100);
                }
            }
        }
    }["LectureTree.useEffect"], [
        nodes
    ]);
    const snapToGrid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LectureTree.useCallback[snapToGrid]": (position)=>{
            return {
                x: Math.round(position.x / __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$movement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MINIMAL_DELTA"]) * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$movement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MINIMAL_DELTA"],
                y: Math.round(position.y / __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$movement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MINIMAL_DELTA"]) * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$movement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MINIMAL_DELTA"]
            };
        }
    }["LectureTree.useCallback[snapToGrid]"], []);
    const snapSizeToGrid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LectureTree.useCallback[snapSizeToGrid]": (width, height, nodeId)=>{
            // Enforce fixed dimensions
            const isTheSolution = nodeId === "TheSolution";
            if (isTheSolution) {
                return {
                    width: theSolutionWidth,
                    height: theSolutionHeight
                };
            }
            return {
                width: nodeWidth,
                height: nodeHeight
            };
        }
    }["LectureTree.useCallback[snapSizeToGrid]"], []);
    // Handle node changes including position updates
    const onNodesChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LectureTree.useCallback[onNodesChange]": (changes)=>{
            const quantizedChanges = changes.map({
                "LectureTree.useCallback[onNodesChange].quantizedChanges": (change)=>{
                    if (change.type === "position" && change.position) {
                        return {
                            ...change,
                            position: snapToGrid(change.position)
                        };
                    }
                    if (change.type === "dimensions" && (change.dimensions || change.resizing === false)) {
                        const node = nodes.find({
                            "LectureTree.useCallback[onNodesChange].quantizedChanges.node": (n)=>n.id === change.id
                        }["LectureTree.useCallback[onNodesChange].quantizedChanges.node"]);
                        if (node && change.dimensions) {
                            const snappedSize = snapSizeToGrid(change.dimensions.width, change.dimensions.height, change.id);
                            return {
                                ...change,
                                dimensions: snappedSize
                            };
                        }
                    }
                    return change;
                }
            }["LectureTree.useCallback[onNodesChange].quantizedChanges"]);
            const updatedNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reactflow$2f$core$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyNodeChanges"])(quantizedChanges, nodes);
            setNodes(updatedNodes);
            // Save changes to localStorage
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$persistence$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveNodeChanges"])(updatedNodes);
        }
    }["LectureTree.useCallback[onNodesChange]"], [
        snapToGrid,
        snapSizeToGrid,
        nodes
    ]);
    const onEdgesChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LectureTree.useCallback[onEdgesChange]": (changes)=>setEdges({
                "LectureTree.useCallback[onEdgesChange]": (eds)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reactflow$2f$core$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyEdgeChanges"])(changes, eds)
            }["LectureTree.useCallback[onEdgesChange]"])
    }["LectureTree.useCallback[onEdgesChange]"], []);
    const onNodeClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LectureTree.useCallback[onNodeClick]": (event, node)=>{
            setSelectedNodes({
                "LectureTree.useCallback[onNodeClick]": (prev)=>{
                    if (event.shiftKey) {
                        // Toggle selection
                        if (prev.includes(node.id)) {
                            return prev.filter({
                                "LectureTree.useCallback[onNodeClick]": (id)=>id !== node.id
                            }["LectureTree.useCallback[onNodeClick]"]);
                        } else {
                            return [
                                ...prev,
                                node.id
                            ];
                        }
                    } else {
                        // Select only this node
                        return [
                            node.id
                        ];
                    }
                }
            }["LectureTree.useCallback[onNodeClick]"]);
        }
    }["LectureTree.useCallback[onNodeClick]"], []);
    const onPaneClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LectureTree.useCallback[onPaneClick]": ()=>{
            setSelectedNodes([]);
        }
    }["LectureTree.useCallback[onPaneClick]"], []);
    const handleResetLayout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LectureTree.useCallback[handleResetLayout]": ()=>{
            // Clear localStorage and force re-layout
            localStorage.removeItem("graph-node-changes");
            hasCenteredRef.current = false;
            const { nodes: ln, edges: le } = getLayoutedElements(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$_lib$2f$graphContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rawNodes"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$_lib$2f$graphContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rawEdges"], "TB");
            setLayout({
                nodes: ln,
                edges: le
            });
            console.log("Layout reset - cleared manual positions");
        }
    }["LectureTree.useCallback[handleResetLayout]"], []);
    const handleExportGraph = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LectureTree.useCallback[handleExportGraph]": ()=>{
            const exportedContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$persistence$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exportUpdatedGraphContent"])(nodes);
            navigator.clipboard.writeText(exportedContent).then({
                "LectureTree.useCallback[handleExportGraph]": ()=>{
                    alert("Graph content copied to clipboard!");
                }
            }["LectureTree.useCallback[handleExportGraph]"]);
        }
    }["LectureTree.useCallback[handleExportGraph]"], [
        nodes
    ]);
    const alignSelectedNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LectureTree.useCallback[alignSelectedNodes]": (alignmentType)=>{
            if (selectedNodes.length < 2) return;
            const selectedNodeObjects = nodes.filter({
                "LectureTree.useCallback[alignSelectedNodes].selectedNodeObjects": (node)=>selectedNodes.includes(node.id)
            }["LectureTree.useCallback[alignSelectedNodes].selectedNodeObjects"]);
            const nodeIds = selectedNodeObjects.map({
                "LectureTree.useCallback[alignSelectedNodes].nodeIds": (node)=>node.id
            }["LectureTree.useCallback[alignSelectedNodes].nodeIds"]);
            const positions = selectedNodeObjects.map({
                "LectureTree.useCallback[alignSelectedNodes].positions": (node)=>node.position
            }["LectureTree.useCallback[alignSelectedNodes].positions"]);
            let newPositions = [];
            switch(alignmentType){
                case "verticalGap":
                    // Sort by current y
                    const sortedByY = [
                        ...selectedNodeObjects
                    ].sort({
                        "LectureTree.useCallback[alignSelectedNodes].sortedByY": (a, b)=>a.position.y - b.position.y
                    }["LectureTree.useCallback[alignSelectedNodes].sortedByY"]);
                    const minY = sortedByY[0].position.y;
                    const avgX = positions.reduce({
                        "LectureTree.useCallback[alignSelectedNodes]": (sum, pos)=>sum + pos.x
                    }["LectureTree.useCallback[alignSelectedNodes]"], 0) / positions.length;
                    newPositions = sortedByY.map({
                        "LectureTree.useCallback[alignSelectedNodes]": (node, index)=>({
                                id: node.id,
                                position: {
                                    x: avgX,
                                    y: minY + index * 200
                                }
                            })
                    }["LectureTree.useCallback[alignSelectedNodes]"]);
                    break;
                case "horizontalGap":
                    // Sort by current x
                    const sortedByX = [
                        ...selectedNodeObjects
                    ].sort({
                        "LectureTree.useCallback[alignSelectedNodes].sortedByX": (a, b)=>a.position.x - b.position.x
                    }["LectureTree.useCallback[alignSelectedNodes].sortedByX"]);
                    const minX = sortedByX[0].position.x;
                    const avgY = positions.reduce({
                        "LectureTree.useCallback[alignSelectedNodes]": (sum, pos)=>sum + pos.y
                    }["LectureTree.useCallback[alignSelectedNodes]"], 0) / positions.length;
                    newPositions = sortedByX.map({
                        "LectureTree.useCallback[alignSelectedNodes]": (node, index)=>({
                                id: node.id,
                                position: {
                                    x: minX + index * 500,
                                    y: avgY
                                }
                            })
                    }["LectureTree.useCallback[alignSelectedNodes]"]);
                    break;
                case "strictVertical":
                    const strictAvgX = positions.reduce({
                        "LectureTree.useCallback[alignSelectedNodes]": (sum, pos)=>sum + pos.x
                    }["LectureTree.useCallback[alignSelectedNodes]"], 0) / positions.length;
                    newPositions = selectedNodeObjects.map({
                        "LectureTree.useCallback[alignSelectedNodes]": (node)=>({
                                id: node.id,
                                position: {
                                    ...node.position,
                                    x: strictAvgX
                                }
                            })
                    }["LectureTree.useCallback[alignSelectedNodes]"]);
                    break;
                case "strictHorizontal":
                    const strictAvgY = positions.reduce({
                        "LectureTree.useCallback[alignSelectedNodes]": (sum, pos)=>sum + pos.y
                    }["LectureTree.useCallback[alignSelectedNodes]"], 0) / positions.length;
                    newPositions = selectedNodeObjects.map({
                        "LectureTree.useCallback[alignSelectedNodes]": (node)=>({
                                id: node.id,
                                position: {
                                    ...node.position,
                                    y: strictAvgY
                                }
                            })
                    }["LectureTree.useCallback[alignSelectedNodes]"]);
                    break;
                default:
                    return;
            }
            // Update the nodes
            const updatedNodes = nodes.map({
                "LectureTree.useCallback[alignSelectedNodes].updatedNodes": (node)=>{
                    const newPos = newPositions.find({
                        "LectureTree.useCallback[alignSelectedNodes].updatedNodes.newPos": (p)=>p.id === node.id
                    }["LectureTree.useCallback[alignSelectedNodes].updatedNodes.newPos"]);
                    if (newPos) {
                        return {
                            ...node,
                            position: newPos.position
                        };
                    }
                    return node;
                }
            }["LectureTree.useCallback[alignSelectedNodes].updatedNodes"]);
            setNodes(updatedNodes);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$persistence$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveNodeChanges"])(updatedNodes);
        }
    }["LectureTree.useCallback[alignSelectedNodes]"], [
        selectedNodes,
        nodes,
        setNodes
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LectureTree.useEffect": ()=>{
            const handleKeyDown = {
                "LectureTree.useEffect.handleKeyDown": (e)=>{
                    // Only handle if at least two nodes are selected
                    if (selectedNodes.length < 2) return;
                    if (e.shiftKey && e.key === "V") {
                        alignSelectedNodes("verticalGap");
                        e.preventDefault();
                    } else if (e.shiftKey && e.key === "H") {
                        alignSelectedNodes("horizontalGap");
                        e.preventDefault();
                    } else if (e.altKey && e.key === "V") {
                        alignSelectedNodes("strictVertical");
                        e.preventDefault();
                    } else if (e.altKey && e.key === "H") {
                        alignSelectedNodes("strictHorizontal");
                        e.preventDefault();
                    }
                }
            }["LectureTree.useEffect.handleKeyDown"];
            window.addEventListener("keydown", handleKeyDown);
            return ({
                "LectureTree.useEffect": ()=>window.removeEventListener("keydown", handleKeyDown)
            })["LectureTree.useEffect"];
        }
    }["LectureTree.useEffect"], [
        selectedNodes,
        nodes,
        setNodes,
        alignSelectedNodes
    ]);
    const nodesWithSelection = nodes.map((node)=>({
            ...node,
            selected: selectedNodes.includes(node.id)
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ThemeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeProvider"], {
        theme: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightTheme"],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FlowContainer, {
            ref: containerRef,
            onWheelCapture: handleBlockWhileDragging,
            onTouchMoveCapture: handleBlockWhileDragging,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ExportButton, {
                    onClick: handleExportGraph,
                    children: "Export Graph"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 463,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResetButton, {
                    onClick: handleResetLayout,
                    children: "Reset Layout"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 464,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reactflow$2f$core$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ReactFlow__as__default$3e$__["default"], {
                    ref: reactFlowRef,
                    onInit: (instance)=>{
                        reactFlowInstanceRef.current = instance;
                    },
                    panOnScroll: false,
                    zoomOnScroll: !isNodeDragging,
                    zoomOnPinch: !isNodeDragging,
                    zoomOnDoubleClick: false,
                    preventScrolling: true,
                    nodes: nodesWithSelection,
                    edges: edges,
                    onNodesChange: onNodesChange,
                    onEdgesChange: onEdgesChange,
                    onNodeDragStart: ()=>setIsNodeDragging(true),
                    onNodeDragStop: ()=>setIsNodeDragging(false),
                    onNodeClick: onNodeClick,
                    onPaneClick: onPaneClick,
                    nodesDraggable: true,
                    nodesConnectable: false,
                    nodeTypes: nodeTypes,
                    edgeTypes: edgeTypes,
                    panOnDrag: !isNodeDragging,
                    autoPanOnNodeDrag: false,
                    selectionOnDrag: false,
                    minZoom: 0.1,
                    maxZoom: 2,
                    style: {
                        backgroundColor: "#EAEAE8"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reactflow$2f$controls$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controls"], {}, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 494,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reactflow$2f$background$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Background"], {
                            variant: "dots",
                            bgColor: "red",
                            color: "transparent"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 495,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 465,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 458,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 457,
        columnNumber: 5
    }, this);
}
_s(LectureTree, "C5pPY9tlWfVTO3v7V3N6s1KSEdo=");
_c3 = LectureTree;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "FlowContainer");
__turbopack_context__.k.register(_c1, "ExportButton");
__turbopack_context__.k.register(_c2, "ResetButton");
__turbopack_context__.k.register(_c3, "LectureTree");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_fd667c36._.js.map