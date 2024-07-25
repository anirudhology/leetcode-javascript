const linkedListCycle = head => {
    // Special case
    if (head === null) {
        return false;
    }
    // Slow and left pointers
    let slow = head;
    let fast = head;
    // Traverse the list
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            return true;
        }
    }
    return false;
};

module.exports = linkedListCycle;