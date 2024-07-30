const rightSideView = require('../../src/tree/binary_tree_right_side_view');
const TreeNode = require('../../src/util/tree_node');

describe('rightSideView', () => {

    test('should return empty array for empty tree', () => {
        expect(rightSideView(null)).toEqual([]);
    });

    test('should return correct right side view for single node tree', () => {
        const root = new TreeNode(1);
        expect(rightSideView(root)).toEqual([1]);
    });

    test('should return correct right side view for right leaning tree', () => {
        const root = new TreeNode(1);
        root.right = new TreeNode(2);
        root.right.right = new TreeNode(3);
        expect(rightSideView(root)).toEqual([1, 2, 3]);
    });

    test('should return correct right side view for left leaning tree', () => {
        const root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.left.left = new TreeNode(3);
        expect(rightSideView(root)).toEqual([1, 2, 3]);
    });

    test('should return correct right side view for balanced tree', () => {
        const root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        root.left.right = new TreeNode(5);
        root.right.right = new TreeNode(6);
        expect(rightSideView(root)).toEqual([1, 3, 6]);
    });
});
