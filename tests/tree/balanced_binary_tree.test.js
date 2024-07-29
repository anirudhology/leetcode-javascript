const isBalanced = require('../../src/tree/balanced_binary_tree');
const TreeNode = require('../../src/util/tree_node');

test('isBalanced', () => {
    // Test case 1: Empty tree
    expect(isBalanced(null)).toBe(true);

    // Test case 2: Single node tree
    let root1 = new TreeNode(1);
    expect(isBalanced(root1)).toBe(true);

    // Test case 3: Balanced tree
    let root2 = new TreeNode(1);
    root2.left = new TreeNode(2);
    root2.right = new TreeNode(3);
    expect(isBalanced(root2)).toBe(true);

    // Test case 4: Unbalanced tree
    let root3 = new TreeNode(1);
    root3.left = new TreeNode(2);
    root3.left.left = new TreeNode(3);
    expect(isBalanced(root3)).toBe(false);

    // Test case 5: Larger balanced tree
    let root4 = new TreeNode(1);
    root4.left = new TreeNode(2);
    root4.right = new TreeNode(3);
    root4.left.left = new TreeNode(4);
    root4.left.right = new TreeNode(5);
    root4.right.left = new TreeNode(6);
    root4.right.right = new TreeNode(7);
    expect(isBalanced(root4)).toBe(true);
});
