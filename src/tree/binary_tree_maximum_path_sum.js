const maxPathSum = root => {
    let maxSum = Number.NEGATIVE_INFINITY;
    // Perform DFS on the tree
    function helper(root) {
        // Base case
        if (root === null) {
            return 0;
        }
        // Calculate non-negative sum for the left and right subtrees
        // of the current root
        const leftSum = Math.max(helper(root.left), 0);
        const rightSum = Math.max(helper(root.right), 0);
        // Total sum for the current node
        const currentSum = root.val + leftSum + rightSum;
        // Update maxSum, if required
        maxSum = Math.max(currentSum, maxSum);
        // Pick the subtree with maximum value for current node
        return root.val + Math.max(leftSum, rightSum);
    };
    helper(root);
    return maxSum;
};

module.exports = maxPathSum;