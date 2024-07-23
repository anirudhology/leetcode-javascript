/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseLinkedList = head => {
    // Special case
    if (head === null || head.next === null) {
        return head;
    }
    // Three pointers for traversing the list
    let previous = null;
    let current = head;
    let next;
    // Traverse through the list
    while (current) {
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }
    return previous;
};

module.exports = reverseLinkedList;