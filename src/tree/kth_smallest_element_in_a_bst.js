const kthSmallest = (root, k) => {
    let kthSmallestElement = 0;
    let count = k;

    function findKthSmallestElement(root) {
        // Base case
        if (root === null) {
            return;
        }
        // Check first in the left subtree
        if (root.left !== null) {
            findKthSmallestElement(root.left);
        }
        count--;
        // Check if we have found kth smallest element
        if (count === 0) {
            kthSmallestElement = root.val;
        }
        // Check in the right subtree
        if (root.right !== null) {
            findKthSmallestElement(root.right);
        }
    }
    findKthSmallestElement(root);
    return kthSmallestElement;
};

module.exports = kthSmallest;