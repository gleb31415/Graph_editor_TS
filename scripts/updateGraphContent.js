const fs = require('fs');
const path = require('path');

// Read the current graph content
const graphContentPath = path.join(__dirname, '../src/_lib/graphContent.js');
const currentContent = fs.readFileSync(graphContentPath, 'utf8');

// Extract edges from current content
const edgesMatch = currentContent.match(/export const rawEdges = (\[[\s\S]*?\]);/);
const edges = edgesMatch ? edgesMatch[1] : '[]';

// Function to update graph content with new nodes
function updateGraphContent(newNodesContent) {
  const updatedContent = `${newNodesContent}

export const rawEdges = ${edges};
`;
  
  // Write back to file
  fs.writeFileSync(graphContentPath, updatedContent, 'utf8');
  console.log('Graph content updated successfully!');
}

// If running directly, expect the new nodes content as argument
if (require.main === module) {
  const newNodesContent = process.argv[2];
  if (!newNodesContent) {
    console.error('Please provide the new nodes content as an argument');
    process.exit(1);
  }
  
  try {
    // Validate the content is valid JavaScript
    eval(`(${newNodesContent})`);
    updateGraphContent(newNodesContent);
  } catch (error) {
    console.error('Invalid nodes content:', error.message);
    process.exit(1);
  }
}

module.exports = { updateGraphContent };
