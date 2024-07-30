const rightSideView = root => {
    // Array to store the nodes visible from right side
    const rightNodes = [];
    // Special case
    if (root === null) {
        return rightNodes;
    }
    // Queue to perform BFS
    const nodes = [];
    nodes.push(root);
    // Process all nodes in the tree
    while (nodes.length > 0) {
        // Count of nodes at the current level
        const size = nodes.length;
        for (let i = 0; i < size; i++) {
            // Get node from the front of the queue
            const node = nodes.shift();
            if (i === size - 1) {
                rightNodes.push(node.val)
            }
            // Add left and right children to the queue, if present
            if (node.left) {
                nodes.push(node.left);
            }
            if (node.right) {
                nodes.push(node.right);
            }
        }
    }
    return rightNodes;
};

module.exports = rightSideView;