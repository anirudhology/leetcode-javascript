const isBalanced = root => {
    // Find heights of the subtree bottom up
    return dfs(root) !== -1;
};

const dfs = root => {
    // Base case
    if (root === null) {
        return 0;
    }
    // Height of the left subtree
    const left = dfs(root.left);
    if (left === -1) {
        return -1;
    }
    // Height of the right subtree
    const right = dfs(root.right);
    if (right === -1) {
        return -1;
    }
    // Check for balancing property
    if (Math.abs(left - right) > 1) {
        return -1;
    }
    return 1 + Math.max(left, right);
};

module.exports = isBalanced;