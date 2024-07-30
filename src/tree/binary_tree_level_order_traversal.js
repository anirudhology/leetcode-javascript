const levelOrder = root => {
    // List to store the final output
    const output = [];
    // Special case
    if (root === null) {
        return output;
    }
    // Queue to perform BFS
    const nodes = [];
    // Add root node to the queue
    nodes.push(root);
    // Process the tree for all nodes
    while (nodes.length > 0) {
        // Get the count of nodes at the current level
        const size = nodes.length;
        // List to store nodes at the current level
        const currentLevelNodes = [];
        for (let i = 0; i < size; i++) {
            // Remove node from the front of the queue
            const node = nodes.shift();
            currentLevelNodes.push(node.val);
            // Add left and right subtrees, if present
            if (node.left) {
                nodes.push(node.left);
            }
            if (node.right) {
                nodes.push(node.right);
            }
        }
        // Add currentLevelNodes to final output
        output.push(currentLevelNodes);
    }
    return output;
};

module.exports = levelOrder;