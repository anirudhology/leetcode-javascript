const levelOrder = require('../../src/tree/binary_tree_level_order_traversal');
const TreeNode = require('../../src/util/tree_node');

test('levelOrder', () => {
    // Test case 1: Empty tree
    let root1 = null;
    let result1 = levelOrder(root1);
    expect(result1).toEqual([]);

    // Test case 2: Single node tree
    let root2 = new TreeNode(1);
    let expected2 = [[1]];
    let result2 = levelOrder(root2);
    expect(result2).toEqual(expected2);

    // Test case 3: Tree with two levels
    let root3 = new TreeNode(1);
    root3.left = new TreeNode(2);
    root3.right = new TreeNode(3);
    let expected3 = [[1], [2, 3]];
    let result3 = levelOrder(root3);
    expect(result3).toEqual(expected3);

    // Test case 4: Tree with three levels
    let root4 = new TreeNode(1);
    root4.left = new TreeNode(2);
    root4.right = new TreeNode(3);
    root4.left.left = new TreeNode(4);
    root4.left.right = new TreeNode(5);
    root4.right.left = new TreeNode(6);
    root4.right.right = new TreeNode(7);
    let expected4 = [[1], [2, 3], [4, 5, 6, 7]];
    let result4 = levelOrder(root4);
    expect(result4).toEqual(expected4);
});
