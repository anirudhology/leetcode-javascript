const isValidBST = require('../../src/tree/validate_binary_search_tree');
const TreeNode = require('../../src/util/tree_node');

describe('ValidateBinarySearchTree', () => {

    test('should return true for empty tree', () => {
        expect(isValidBST(null)).toBe(true);
    });

    test('should return true for single node tree', () => {
        const root = new TreeNode(1);
        expect(isValidBST(root)).toBe(true);
    });

    test('should return true for valid BST', () => {
        const root = new TreeNode(2);
        root.left = new TreeNode(1);
        root.right = new TreeNode(3);
        expect(isValidBST(root)).toBe(true);
    });

    test('should return false for invalid BST', () => {
        const root = new TreeNode(5);
        root.left = new TreeNode(1);
        root.right = new TreeNode(4);
        root.right.left = new TreeNode(3);
        root.right.right = new TreeNode(6);
        expect(isValidBST(root)).toBe(false);
    });

    test('should return true for valid BST with negative values', () => {
        const root = new TreeNode(0);
        root.left = new TreeNode(-1);
        expect(isValidBST(root)).toBe(true);
    });

    test('should return false for invalid BST with equal values', () => {
        const root = new TreeNode(1);
        root.left = new TreeNode(1);
        expect(isValidBST(root)).toBe(false);
    });
});
