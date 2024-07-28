const maxDepthOfBinaryTree = root => {
    // Special case
    if (root === null) {
        return 0;
    }
    return 1 + Math.max(maxDepthOfBinaryTree(root.left), maxDepthOfBinaryTree(root.right));
};

module.exports = maxDepthOfBinaryTree;