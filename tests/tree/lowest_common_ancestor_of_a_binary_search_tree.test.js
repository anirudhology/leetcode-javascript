const lowestCommonAncestor = require('../../src/tree/lowest_common_ancestor_of_a_binary_search_tree');
const TreeNode = require('../../src/util/tree_node');

test('lowestCommonAncestor', () => {
    // Test case 1: Both nodes are null
    expect(lowestCommonAncestor(null, null, null)).toBe(null);

    // Test case 2: One node is null
    let root = new TreeNode(3);
    let p = new TreeNode(1);
    expect(lowestCommonAncestor(root, null, p)).toBe(null);
    expect(lowestCommonAncestor(root, p, null)).toBe(null);

    // Test case 3: Both nodes are the same
    expect(lowestCommonAncestor(p, p, p)).toBe(p);

    // Test case 4: LCA is root
    let q = new TreeNode(5);
    root.left = p;
    root.right = q;
    expect(lowestCommonAncestor(root, p, q)).toBe(root);

    // Test case 5: LCA is in the left subtree
    let p2 = new TreeNode(0);
    p.left = p2;
    expect(lowestCommonAncestor(root, p2, p)).toBe(p);

    // Test case 6: LCA is in the right subtree
    let q2 = new TreeNode(6);
    q.right = q2;
    expect(lowestCommonAncestor(root, q, q2)).toBe(q);

    // Test case 7: Complex tree
    let root2 = new TreeNode(6);
    let p3 = new TreeNode(2);
    let q3 = new TreeNode(8);
    root2.left = new TreeNode(0);
    root2.right = new TreeNode(4);
    root2.left.left = new TreeNode(3);
    root2.left.right = new TreeNode(5);
    expect(lowestCommonAncestor(root2, p3, q3)).toBe(root2);
});
