const ListNode = require('../../src/util/list_node');

const mergeKLists = lists => {
    // Special case
    if (lists === null || lists.length === 0) {
        return null;
    }
    return mergeLists(lists, 0, lists.length - 1);
};

const mergeLists = (lists, left, right) => {
    // Boundary condition
    if (left >= right) {
        return lists[left];
    }
    // Divide the lists in two halves
    const middle = left + Math.floor((right - left) / 2);
    const leftHalf = mergeLists(lists, left, middle);
    const rightHalf = mergeLists(lists, middle + 1, right);
    // Merge lists
    return merge(leftHalf, rightHalf);
}

const merge = (left, right) => {
    // Dummy head
    const dummy = new ListNode();
    // Pointer to traverse the lists
    let temp = dummy;
    // Process both lists
    while (left !== null && right !== null) {
        if (left.val < right.val) {
            temp.next = new ListNode(left.val);
            left = left.next;
        } else {
            temp.next = new ListNode(right.val);
            right = right.next;
        }
        temp = temp.next;
    }
    while (left !== null) {
        temp.next = new ListNode(left.val);
        left = left.next;
        temp = temp.next;
    }
    while (right !== null) {
        temp.next = new ListNode(right.val);
        right = right.next;
        temp = temp.next;
    }
    return dummy.next;
}

module.exports = mergeKLists;