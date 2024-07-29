const isSameTree = require('../../src/tree/same_tree');
const TreeNode = require('../../src/util/tree_node');

test('isSameTree', () => {
    // Test case 1: Both trees are null
    expect(isSameTree(null, null)).toBe(true);

    // Test case 2: One tree is null
    let p1 = new TreeNode(1);
    expect(isSameTree(p1, null)).toBe(false);
    expect(isSameTree(null, p1)).toBe(false);

    // Test case 3: Both trees have one node with the same value
    let p2 = new TreeNode(1);
    let q2 = new TreeNode(1);
    expect(isSameTree(p2, q2)).toBe(true);

    // Test case 4: Both trees have one node with different values
    let p3 = new TreeNode(1);
    let q3 = new TreeNode(2);
    expect(isSameTree(p3, q3)).toBe(false);

    // Test case 5: Both trees have multiple nodes with the same structure and values
    let p4 = new TreeNode(1);
    p4.left = new TreeNode(2);
    p4.right = new TreeNode(3);
    let q4 = new TreeNode(1);
    q4.left = new TreeNode(2);
    q4.right = new TreeNode(3);
    expect(isSameTree(p4, q4)).toBe(true);

    // Test case 6: Both trees have multiple nodes with different structures
    let p5 = new TreeNode(1);
    p5.left = new TreeNode(2);
    let q5 = new TreeNode(1);
    q5.right = new TreeNode(2);
    expect(isSameTree(p5, q5)).toBe(false);
});
