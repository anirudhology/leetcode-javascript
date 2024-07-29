const isSubtree = (root, subRoot) => {
    if (root === null) {
        return false;
    }
    if (isSame(root, subRoot)) {
        return true;
    }
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

const isSame = (s, t) => {
    if (s === null && t === null) {
        return true;
    }
    if (s === null || t === null || s.val !== t.val) {
        return false;
    }
    return isSame(s.left, t.left) && isSame(s.right, t.right);
}

module.exports = isSubtree;