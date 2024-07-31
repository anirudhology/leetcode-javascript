const isValidBST = root => {
    return dfs(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
};

const dfs = (root, minValue, maxValue) => {
    // Base case
    if (root === null) {
        return true;
    }
    if (root.val >= maxValue || root.val <= minValue) {
        return false;
    }
    return dfs(root.left, minValue, root.val) && dfs(root.right, root.val, maxValue);
};

module.exports = isValidBST;