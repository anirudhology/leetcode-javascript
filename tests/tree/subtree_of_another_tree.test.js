const isSubtree = require('../../src/tree/subtree_of_another_tree');
const TreeNode = require('../../src/util/tree_node');

test('isSubtree', () => {
    // Test case 1: Both trees are null
    expect(isSubtree(null, null)).toBe(false);

    // Test case 2: One tree is null
    let root1 = new TreeNode(1);
    expect(isSubtree(root1, null)).toBe(false);
    expect(isSubtree(null, root1)).toBe(false);

    // Test case 3: Both trees have one node with the same value
    let root2 = new TreeNode(1);
    let subRoot2 = new TreeNode(1);
    expect(isSubtree(root2, subRoot2)).toBe(true);

    // Test case 4: Subtree with different values
    let root3 = new TreeNode(1);
    let subRoot3 = new TreeNode(2);
    expect(isSubtree(root3, subRoot3)).toBe(false);

    // Test case 5: Subtree is an actual subtree
    let root4 = new TreeNode(3);
    root4.left = new TreeNode(4);
    root4.right = new TreeNode(5);
    root4.left.left = new TreeNode(1);
    root4.left.right = new TreeNode(2);

    let subRoot4 = new TreeNode(4);
    subRoot4.left = new TreeNode(1);
    subRoot4.right = new TreeNode(2);
    expect(isSubtree(root4, subRoot4)).toBe(true);

    // Test case 6: Subtree is not an actual subtree
    let subRoot5 = new TreeNode(4);
    subRoot5.left = new TreeNode(1);
    subRoot5.right = new TreeNode(3);
    expect(isSubtree(root4, subRoot5)).toBe(false);
});
