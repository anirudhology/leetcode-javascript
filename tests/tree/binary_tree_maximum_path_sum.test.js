const maxPathSum = require('../../src/tree/binary_tree_maximum_path_sum');
const TreeNode = require('../../src/util/tree_node');

describe('BinaryTreeMaximumPathSum', () => {

    test('should return the max path sum for a single node', () => {
        const root = new TreeNode(1);
        const result = maxPathSum(root);
        expect(result).toBe(1);
    });

    test('should return the max path sum for two nodes', () => {
        const root = new TreeNode(1);
        root.left = new TreeNode(2);
        const result = maxPathSum(root);
        expect(result).toBe(3);
    });

    test('should return the max path sum for negative nodes', () => {
        const root = new TreeNode(-10);
        root.left = new TreeNode(9);
        root.right = new TreeNode(20);
        root.right.left = new TreeNode(15);
        root.right.right = new TreeNode(7);
        const result = maxPathSum(root);
        expect(result).toBe(42);
    });

    test('should return the max path sum for mixed values', () => {
        const root = new TreeNode(2);
        root.left = new TreeNode(-1);
        root.right = new TreeNode(-2);
        const result = maxPathSum(root);
        expect(result).toBe(2);
    });
});
