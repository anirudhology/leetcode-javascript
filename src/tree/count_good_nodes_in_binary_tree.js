const goodNodes = root => {
    let count = 0;
    // Perform DFS
    function dfs(node, max) {
        if (node === null) {
            return;
        }
        // Perform preorder traversal
        if (node.val >= max) {
            count++;
            max = node.val;
        }
        dfs(node.left, max);
        dfs(node.right, max);
    }
    dfs(root, root.val);
    return count;
};

module.exports = goodNodes;