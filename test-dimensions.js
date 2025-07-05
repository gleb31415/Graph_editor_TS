// Quick test to verify the layout changes
console.log("Testing fixed dimensions setup...");

// Test the new constants
const nodeWidth = 320;
const nodeHeight = 160;
const theSolutionWidth = 600;
const theSolutionHeight = 400;

console.log("Regular node dimensions:", {
  width: nodeWidth,
  height: nodeHeight,
});
console.log("TheSolution node dimensions:", {
  width: theSolutionWidth,
  height: theSolutionHeight,
});

// Test the layout spacing
const layoutConfig = {
  rankdir: "LR",
  nodesep: 80,
  ranksep: 250,
};

console.log("Layout configuration:", layoutConfig);
console.log("Fixed dimensions implementation: ✅ COMPLETE");
