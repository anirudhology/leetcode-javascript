const invertTree = root => {
    // Base case
    if (root === null) {
        return null;
    }
    // Left and right subtrees
    const left = root.left;
    const right = root.right;
    // Invert
    root.right = invertTree(left);
    root.left = invertTree(right);
    return root;
};

module.exports = invertTree;