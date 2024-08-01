const { serialize, deserialize } = require('../../src/tree/serialize_and_deserialize_binary_tree');
const TreeNode = require('../../src/util/tree_node');

describe('Serialize and Deserialize Binary Tree', () => {

    test('serialize and deserialize an empty tree', () => {
        const root = null;
        expect(serialize(root)).toBe("");
        expect(deserialize("")).toBeNull();
    });

    test('serialize and deserialize a single node tree', () => {
        const root = new TreeNode("1");
        const serialized = serialize(root);
        expect(serialized).toBe("1 n n ");
        const deserialized = deserialize(serialized);
        expect(deserialized.val).toBe("1");
        expect(deserialized.left).toBeNull();
        expect(deserialized.right).toBeNull();
    });

    test('serialize and deserialize a complete binary tree', () => {
        const root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        root.left.right = new TreeNode(5);
        root.right.left = new TreeNode(6);
        root.right.right = new TreeNode(7);

        const serialized = serialize(root);
        expect(serialized).toBe("1 2 3 4 5 6 7 n n n n n n n n ");

        const deserialized = deserialize(serialized);
        expect(deserialized.val).toBe("1");
        expect(deserialized.left.val).toBe(2);
        expect(deserialized.right.val).toBe(3);
        expect(deserialized.left.left.val).toBe(4);
        expect(deserialized.left.right.val).toBe(5);
        expect(deserialized.right.left.val).toBe(6);
        expect(deserialized.right.right.val).toBe(7);
    });

    test('serialize and deserialize a tree with only left children', () => {
        const root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.left.left = new TreeNode(3);
        root.left.left.left = new TreeNode(4);

        const serialized = serialize(root);
        expect(serialized).toBe("1 2 n 3 n 4 n n n ");

        const deserialized = deserialize(serialized);
        expect(deserialized.val).toBe("1");
        expect(deserialized.left.val).toBe(2);
        expect(deserialized.right).toBeNull();
        expect(deserialized.left.left.val).toBe(3);
        expect(deserialized.left.right).toBeNull();
        expect(deserialized.left.left.left.val).toBe(4);
        expect(deserialized.left.left.right).toBeNull();
    });

    test('serialize and deserialize a tree with only right children', () => {
        const root = new TreeNode("1");
        root.right = new TreeNode(2);
        root.right.right = new TreeNode(3);
        root.right.right.right = new TreeNode(4);

        const serialized = serialize(root);
        expect(serialized).toBe("1 n 2 n 3 n 4 n n ");

        const deserialized = deserialize(serialized);
        expect(deserialized.val).toBe("1");
        expect(deserialized.left).toBeNull();
        expect(deserialized.right.val).toBe(2);
        expect(deserialized.right.left).toBeNull();
        expect(deserialized.right.right.val).toBe(3);
        expect(deserialized.right.right.left).toBeNull();
        expect(deserialized.right.right.right.val).toBe(4);
        expect(deserialized.right.right.right.left).toBeNull();
    });
});
