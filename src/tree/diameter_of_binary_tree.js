const diameterOfBinaryTree = root => {
    let diameter = 0;
    const maxDepth = root => {
        // Special case
        if (root === null) {
            return 0;
        }
        // Calculate heights of left and right subtrees
        const leftHeight = maxDepth(root.left);
        const rightHeight = maxDepth(root.right);
        // Update diameter, if required
        diameter = Math.max(diameter, leftHeight + rightHeight);
        return 1 + Math.max(leftHeight, rightHeight);
    }
    maxDepth(root);
    return diameter;
};

module.exports = diameterOfBinaryTree;