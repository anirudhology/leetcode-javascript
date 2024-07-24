/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList = head => {
    // Special case
    if (head === null || head.next === null) {
        return;
    }
    // Find the middle of the list
    const middle = getMiddle(head);
    // Divide the list in two halves
    let head1 = head;
    let head2 = middle.next;
    // Detach the two halves
    middle.next = null;
    // Reverse the second half
    let reverseHead2 = reverse(head2);
    // Merge two lists
    while (head1 && reverseHead2) {
        const next1 = head1.next;
        const next2 = reverseHead2.next;
        head1.next = reverseHead2;
        reverseHead2.next = next1;
        head1 = next1;
        reverseHead2 = next2;
    }
};

const getMiddle = head => {
    let slow = head;
    let fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

const reverse = head => {
    let previous = null;
    let current = head;
    let next = null;
    while (current) {
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }
    return previous;
}

module.exports = reorderList;