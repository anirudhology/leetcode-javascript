const lowestCommonAncestor = (root, p, q) => {
    // Special case
    if (root === null || p === null || q === null) {
        return null;
    }
    // If value of root is greater than values at both p and q,
    // it means LCA can only be in the left subtree
    if (root.val > p.val && root.val > q.val) {
        return lowestCommonAncestor(root.left, p, q);
    }
    // If value of root is smaller than values at both p and q,
    // it means LCA can only be in the right subtree
    else if (root.val < p.val && root.val < q.val) {
        return lowestCommonAncestor(root.right, p, q);
    }
    //We will reach here if value is root is in between values at
    // p and q. If this happens, then only root can be the LCA
    else {
        return root;
    }
};

module.exports = lowestCommonAncestor;