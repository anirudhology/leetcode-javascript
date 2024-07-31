const buildTree = require('../../src/tree/construct_binary_tree_from_preorder_and_inorder_traversal');
const TreeNode = require('../../src/util/tree_node');

describe('ConstructBinaryTreeFromPreorderAndInorderTraversal', () => {

    test('should build a single node tree', () => {
        const preorder = [1];
        const inorder = [1];
        const root = buildTree(preorder, inorder);
        expect(root).not.toBeNull();
        expect(root.val).toBe(1);
        expect(root.left).toBeNull();
        expect(root.right).toBeNull();
    });

    test('should build a tree with two nodes', () => {
        const preorder = [1, 2];
        const inorder = [2, 1];
        const root = buildTree(preorder, inorder);
        expect(root).not.toBeNull();
        expect(root.val).toBe(1);
        expect(root.left).not.toBeNull();
        expect(root.left.val).toBe(2);
        expect(root.right).toBeNull();
    });

    test('should build a balanced tree', () => {
        const preorder = [3, 9, 20, 15, 7];
        const inorder = [9, 3, 15, 20, 7];
        const root = buildTree(preorder, inorder);
        expect(root).not.toBeNull();
        expect(root.val).toBe(3);
        expect(root.left).not.toBeNull();
        expect(root.left.val).toBe(9);
        expect(root.right).not.toBeNull();
        expect(root.right.val).toBe(20);
    });

    test('should return null for an empty tree', () => {
        const preorder = [];
        const inorder = [];
        const root = buildTree(preorder, inorder);
        expect(root).toBeNull();
    });

    test('should build an unbalanced tree', () => {
        const preorder = [3, 2, 1, 4, 5];
        const inorder = [1, 2, 3, 4, 5];
        const root = buildTree(preorder, inorder);
        expect(root).not.toBeNull();
        expect(root.val).toBe(3);
        expect(root.left).not.toBeNull();
        expect(root.left.val).toBe(2);
        expect(root.left.left).not.toBeNull();
        expect(root.left.left.val).toBe(1);
        expect(root.right).not.toBeNull();
        expect(root.right.val).toBe(4);
        expect(root.right.right).not.toBeNull();
        expect(root.right.right.val).toBe(5);
    });
});
