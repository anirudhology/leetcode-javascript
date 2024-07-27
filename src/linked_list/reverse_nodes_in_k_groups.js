const ListNode = require('../../src/util/list_node');

const reverseKGroup = function (head, k) {
    // Special case
    if (head === null && k <= 0) {
        return head;
    }
    // Dummy head
    const dummy = new ListNode();
    dummy.next = head;
    // Pointer to traverse the list
    let temp = dummy;
    // Traverse the list 
    while (true) {
        // Current pointer
        let currentTemp = temp;
        // Check if there are k nodes to reverse
        for (let i = 0; i < k && currentTemp !== null; i++) {
            currentTemp = currentTemp.next;
        }
        if (currentTemp === null) {
            break;
        }
        // Reverse the list
        let previous = null;
        let current = temp.next;
        let next = null;
        for (let i = 0; i < k; i++) {
            next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
        // Tail of the reversed list
        const tail = temp.next;
        tail.next = current;
        temp.next = previous;
        temp = tail;
    }
    return dummy.next;
};

module.exports = reverseKGroup;