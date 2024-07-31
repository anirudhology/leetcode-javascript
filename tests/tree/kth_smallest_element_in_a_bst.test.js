const TreeNode = require('../../src/util/tree_node');
const kthSmallest = require('../../src/tree/kth_smallest_element_in_a_bst');

describe('KthSmallestElementInABST', () => {
    test('should return the kth smallest element in a single node tree', () => {
        const root = new TreeNode(1);
        expect(kthSmallest(root, 1)).toBe(1);
    });

    test('should return the kth smallest element in a left skewed tree', () => {
        const root = new TreeNode(3);
        root.left = new TreeNode(2);
        root.left.left = new TreeNode(1);
        expect(kthSmallest(root, 2)).toBe(2);
    });

    test('should return the kth smallest element in a right skewed tree', () => {
        const root = new TreeNode(1);
        root.right = new TreeNode(2);
        root.right.right = new TreeNode(3);
        expect(kthSmallest(root, 3)).toBe(3);
    });

    test('should return the kth smallest element in a balanced tree', () => {
        const root = new TreeNode(3);
        root.left = new TreeNode(1);
        root.right = new TreeNode(4);
        root.left.right = new TreeNode(2);
        expect(kthSmallest(root, 3)).toBe(3);
    });

    test('should return the kth smallest element when k is greater than the number of nodes', () => {
        const root = new TreeNode(1);
        root.right = new TreeNode(2);
        root.right.right = new TreeNode(3);
        expect(kthSmallest(root, 4)).toBe(0); // This assumes we have a condition to handle this gracefully
    });
});
