const TreeNode = require('../../src/util/tree_node');

const serialize = root => {
    // Special case
    if (root === null) {
        return "";
    }
    // String to store the serialized tree
    let serialized = "";
    // Queue to perform BFS
    const nodes = [];
    nodes.push(root);
    // Process the binary tree
    while (nodes.length > 0) {
        // Get node from the front of the queue
        const node = nodes.shift();
        if (node === null) {
            serialized += "n" + " "
        } else {
            serialized += node.val + " "
            nodes.push(node.left);
            nodes.push(node.right);
        }
    }
    return serialized;
};

const deserialize = data => {
    // Base case
    if (data === "") {
        return null;
    }
    // Get values for the nodes to be constructed
    const values = data.split(" ");
    const root = new TreeNode(values[0]);
    // Queue to perform BFS
    const nodes = [];
    nodes.push(root);
    // Process remaining values
    for (let i = 1; i < values.length; i += 2) {
        // Get node from the front of the queue
        const node = nodes.shift();
        if (node !== undefined) {
            if (values[i] !== "n") {
                node.left = new TreeNode(parseInt(values[i]));
                nodes.push(node.left);
            }
            if (values[i + 1] !== "n") {
                node.right = new TreeNode(parseInt(values[i + 1]));
                nodes.push(node.right);
            }
        }
    }
    return root;
};

module.exports = {
    serialize,
    deserialize
};