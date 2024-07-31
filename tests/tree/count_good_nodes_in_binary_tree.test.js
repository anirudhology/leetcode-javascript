const goodNodes = require('../../src/tree/count_good_nodes_in_binary_tree');
const TreeNode = require('../../src/util/tree_node');

describe('goodNodes', () => {

    test('should return correct count for single node tree', () => {
        const root = new TreeNode(1);
        expect(goodNodes(root)).toBe(1);
    });

    test('should return correct count for right leaning tree', () => {
        const root = new TreeNode(1);
        root.right = new TreeNode(2);
        root.right.right = new TreeNode(3);
        expect(goodNodes(root)).toBe(3);
    });

    test('should return correct count for left leaning tree', () => {
        const root = new TreeNode(3);
        root.left = new TreeNode(2);
        root.left.left = new TreeNode(1);
        expect(goodNodes(root)).toBe(1);
    });

    test('should return correct count for balanced tree', () => {
        const root = new TreeNode(3);
        root.left = new TreeNode(1);
        root.right = new TreeNode(4);
        root.left.left = new TreeNode(3);
        root.right.left = new TreeNode(1);
        root.right.right = new TreeNode(5);
        expect(goodNodes(root)).toBe(4);
    });
});
