const POSITIONS_STORAGE_KEY = 'node-positions';

export const saveNodePosition = (nodeId, position) => {
  try {
    const savedPositions = JSON.parse(localStorage.getItem(POSITIONS_STORAGE_KEY) || '{}');
    savedPositions[nodeId] = position;
    localStorage.setItem(POSITIONS_STORAGE_KEY, JSON.stringify(savedPositions));
  } catch (error) {
    console.error('Failed to save node position:', error);
  }
};

export const loadNodePositions = () => {
  try {
    return JSON.parse(localStorage.getItem(POSITIONS_STORAGE_KEY) || '{}');
  } catch (error) {
    console.error('Failed to load node positions:', error);
    return {};
  }
};

export const saveAllNodePositions = (nodes) => {
  try {
    const positions = {};
    nodes.forEach(node => {
      if (node.position) {
        positions[node.id] = node.position;
      }
    });
    localStorage.setItem(POSITIONS_STORAGE_KEY, JSON.stringify(positions));
  } catch (error) {
    console.error('Failed to save all node positions:', error);
  }
};
