const STORAGE_KEY = 'graph_node_changes';

export const saveNodeChanges = (nodes) => {
  const changes = {};
  nodes.forEach(node => {
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

export const loadNodeChanges = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch (error) {
    console.error('Failed to load node changes:', error);
    return {};
  }
};

export const applyStoredChanges = (nodes) => {
  const storedChanges = loadNodeChanges();
  return nodes.map(node => {
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

export const exportUpdatedGraphContent = (nodes) => {
  const updatedNodes = nodes.map(node => ({
    id: node.id,
    data: node.data,
    position: node.position,
    width: node.width,
    height: node.height
  }));
  
  return `export const rawNodes = ${JSON.stringify(updatedNodes, null, 2)};`;
};
