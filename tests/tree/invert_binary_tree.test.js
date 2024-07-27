const invertTree = require('../../src/tree/invert_binary_tree');
const TreeNode = require('../../src/util/tree_node');

test('invertTree', () => {
    // Test case 1: Empty tree
    expect(invertTree(null)).toBeNull();

    // Test case 2: Single node tree
    let root1 = new TreeNode(1);
    let result1 = invertTree(root1);
    expect(result1.val).toBe(1);
    expect(result1.left).toBeNull();
    expect(result1.right).toBeNull();

    // Test case 3: Full binary tree
    let root2 = new TreeNode(1);
    root2.left = new TreeNode(2);
    root2.right = new TreeNode(3);
    root2.left.left = new TreeNode(4);
    root2.left.right = new TreeNode(5);
    root2.right.left = new TreeNode(6);
    root2.right.right = new TreeNode(7);

    let invertedRoot2 = invertTree(root2);
    expect(invertedRoot2.val).toBe(1);
    expect(invertedRoot2.left.val).toBe(3);
    expect(invertedRoot2.right.val).toBe(2);
    expect(invertedRoot2.left.left.val).toBe(7);
    expect(invertedRoot2.left.right.val).toBe(6);
    expect(invertedRoot2.right.left.val).toBe(5);
    expect(invertedRoot2.right.right.val).toBe(4);
});
