const fs = require('fs');
const path = require('path');

// Since we can't access localStorage directly in Node.js, we'll read from a JSON file
// You can export localStorage data by running this in browser console:
// JSON.stringify(localStorage.getItem('node-positions'))
const POSITIONS_FILE = path.join(__dirname, 'saved-positions.json');
const GRAPH_CONTENT_FILE = path.join(__dirname, 'src/_lib/graphContent.js');

function loadSavedPositions() {
  try {
    if (fs.existsSync(POSITIONS_FILE)) {
      const positionsData = fs.readFileSync(POSITIONS_FILE, 'utf8');
      return JSON.parse(positionsData);
    }
    console.log('No saved positions file found. Create saved-positions.json with exported localStorage data.');
    return {};
  } catch (error) {
    console.error('Failed to load saved positions:', error);
    return {};
  }
}

function updateGraphContent(positions) {
  try {
    // Read the current graphContent.js file
    const graphContentRaw = fs.readFileSync(GRAPH_CONTENT_FILE, 'utf8');
    
    // Parse the file to extract rawNodes
    const rawNodesMatch = graphContentRaw.match(/export const rawNodes = (\[[\s\S]*?\]);/);
    if (!rawNodesMatch) {
      throw new Error('Could not find rawNodes export in graphContent.js');
    }
    
    // Parse the rawNodes array
    const rawNodesStr = rawNodesMatch[1];
    const rawNodes = eval(`(${rawNodesStr})`);
    
    // Update positions
    let updatedCount = 0;
    rawNodes.forEach(node => {
      if (positions[node.id]) {
        node.data.position = positions[node.id];
        updatedCount++;
      }
    });
    
    // Convert back to string format
    const updatedRawNodesStr = JSON.stringify(rawNodes, null, 2)
      .replace(/"id":/g, 'id:')
      .replace(/"data":/g, 'data:')
      .replace(/"section":/g, 'section:')
      .replace(/"grade":/g, 'grade:')
      .replace(/"position":/g, 'position:')
      .replace(/"x":/g, 'x:')
      .replace(/"y":/g, 'y:');
    
    // Replace in the original file content
    const updatedContent = graphContentRaw.replace(
      /export const rawNodes = \[[\s\S]*?\];/,
      `export const rawNodes = ${updatedRawNodesStr};`
    );
    
    // Write back to file
    fs.writeFileSync(GRAPH_CONTENT_FILE, updatedContent, 'utf8');
    
    console.log(`Successfully updated ${updatedCount} node positions in graphContent.js`);
    
  } catch (error) {
    console.error('Failed to update graph content:', error);
  }
}

function exportLocalStorageHelper() {
  console.log('\nTo export your current positions from the browser:');
  console.log('1. Open browser developer tools (F12)');
  console.log('2. Go to Console tab');
  console.log('3. Run this command:');
  console.log('   const positions = localStorage.getItem("node-positions");');
  console.log('   console.log(positions);');
  console.log('4. Copy the output and save it as saved-positions.json in this directory');
  console.log('\nAlternatively, run this in console to download the file:');
  console.log('   const positions = localStorage.getItem("node-positions");');
  console.log('   const blob = new Blob([positions], {type: "application/json"});');
  console.log('   const url = URL.createObjectURL(blob);');
  console.log('   const a = document.createElement("a");');
  console.log('   a.href = url;');
  console.log('   a.download = "saved-positions.json";');
  console.log('   a.click();');
}

// Main execution
function main() {
  console.log('Reading saved positions...');
  const positions = loadSavedPositions();
  
  if (Object.keys(positions).length === 0) {
    exportLocalStorageHelper();
    return;
  }
  
  console.log(`Found ${Object.keys(positions).length} saved positions`);
  updateGraphContent(positions);
}

// Run the script
main();
