const ListNode = require('../../src/util/list_node');

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
    // Dummy head of resultant list
    const dummy = new ListNode();
    // Pointer to traverse the resultant list
    let temp = dummy;
    // Carry
    let carry = 0;
    // Traverse both lists together
    while (l1 !== null && l2 !== null) {
        let sum = carry + l1.val + l2.val;
        carry = Math.floor(sum / 10);
        temp.next = new ListNode(sum % 10);
        temp = temp.next;
        l1 = l1.next;
        l2 = l2.next;
    }
    // Process the remaining nodes
    while (l1 !== null) {
        let sum = carry + l1.val;
        carry = Math.floor(sum / 10);
        temp.next = new ListNode(sum % 10);
        temp = temp.next;
        l1 = l1.next;
    }
    while (l2 !== null) {
        let sum = carry + l2.val;
        carry = Math.floor(sum / 10);
        temp.next = new ListNode(sum % 10);
        temp = temp.next;
        l2 = l2.next;
    }
    // Adjust the remaining carry
    if (carry !== 0) {
        temp.next = new ListNode(carry);
    }
    return dummy.next;
};

module.exports = addTwoNumbers;