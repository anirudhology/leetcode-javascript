const TreeNode = require('../../src/util/tree_node');

const buildTree = (preorder, inorder) => {
    // Map to store indices of elements in the inorder array
    const indexMappings = new Map();
    for (let i = 0; i < inorder.length; i++) {
        indexMappings.set(inorder[i], i);
    }
    // Perform DFS on the tree
    return helper(0, preorder.length - 1, 0, inorder.length - 1, preorder, inorder, indexMappings);
};

const helper = (preStart, preEnd, inStart, inEnd, preorder, inorder, indexMappings) => {
    // Base case
    if (preStart > preEnd || inStart > inEnd) {
        return null;
    }
    // Create root of the tree
    const root = new TreeNode(preorder[preStart]);
    // Get index of this element in the inorder array
    const index = indexMappings.get(root.val);
    // Elements in the inorder array to the left of index will be in
    // the left subtree and elements in the inorder array to the right
    // of the index will be in the right subtree
    root.left = helper(preStart + 1, preEnd, inStart, index - 1, preorder, inorder, indexMappings);
    root.right = helper(preStart + index - inStart + 1, preEnd, index + 1, inEnd, preorder, inorder, indexMappings);
    return root;
}

module.exports = buildTree;