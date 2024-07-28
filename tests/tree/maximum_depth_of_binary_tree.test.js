const maxDepth = require('../../src/tree/maximum_depth_of_binary_tree');
const TreeNode = require('../../src/util/tree_node');

test('maxDepth', () => {
    // Test case 1: Empty tree
    expect(maxDepth(null)).toBe(0);

    // Test case 2: Single node tree
    let root1 = new TreeNode(1);
    expect(maxDepth(root1)).toBe(1);

    // Test case 3: Two-level tree
    let root2 = new TreeNode(1);
    root2.left = new TreeNode(2);
    expect(maxDepth(root2)).toBe(2);

    // Test case 4: Full binary tree
    let root3 = new TreeNode(1);
    root3.left = new TreeNode(2);
    root3.right = new TreeNode(3);
    root3.left.left = new TreeNode(4);
    root3.left.right = new TreeNode(5);
    root3.right.left = new TreeNode(6);
    root3.right.right = new TreeNode(7);
    expect(maxDepth(root3)).toBe(3);
});