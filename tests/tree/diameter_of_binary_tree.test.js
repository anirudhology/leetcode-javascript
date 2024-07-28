const diameterOfBinaryTree = require('../../src/tree/diameter_of_binary_tree');
const TreeNode = require('../../src/util/tree_node');

test('diameterOfBinaryTree', () => {
    // Test case 1: Empty tree
    expect(diameterOfBinaryTree(null)).toBe(0);

    // Test case 2: Single node tree
    let root1 = new TreeNode(1);
    expect(diameterOfBinaryTree(root1)).toBe(0);

    // Test case 3: Two-level tree
    let root2 = new TreeNode(1);
    root2.left = new TreeNode(2);
    expect(diameterOfBinaryTree(root2)).toBe(1);

    // Test case 4: Full binary tree
    let root3 = new TreeNode(1);
    root3.left = new TreeNode(2);
    root3.right = new TreeNode(3);
    root3.left.left = new TreeNode(4);
    root3.left.right = new TreeNode(5);
    expect(diameterOfBinaryTree(root3)).toBe(3);

    // Test case 5: Larger tree
    let root4 = new TreeNode(1);
    root4.left = new TreeNode(2);
    root4.right = new TreeNode(3);
    root4.left.left = new TreeNode(4);
    root4.left.right = new TreeNode(5);
    root4.right.right = new TreeNode(6);
    root4.left.left.left = new TreeNode(7);
    expect(diameterOfBinaryTree(root4)).toBe(5);
});
