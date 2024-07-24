/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = (head, n) => {
    // Slow and fast pointers
    let slow = head;
    let fast = head;
    // Move fast pointer n steps ahead
    while (n > 0 && fast !== null) {
        fast = fast.next;
        n--;
    }
    // If fast is null here, it means n >= number of nodes in the list
    if (fast === null && head !== null) {
        return head.next;
    }
    // Move both pointers with the same pace
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next;
    }
    if (slow !== null && slow.next !== null) {
        slow.next = slow.next.next;
    }
    return head;
};

module.exports = removeNthFromEnd;