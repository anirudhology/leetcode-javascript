const ListNode = require('../util/list_node');

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = (head1, head2) => {
    // Special cases
    if (head1 === undefined || head1 === null) {
        return head2;
    }
    if (head2 === undefined || head2 === null) {
        return head1;
    }
    // Head for the new list
    let head = null;
    if (head1.val < head2.val) {
        head = new ListNode(head1.val);
        head1 = head1.next;
    } else {
        head = new ListNode(head2.val);
        head2 = head2.next;
    }
    let temp = head;
    // Process both lists together
    while (head1 && head2) {
        if (head1.val < head2.val) {
            temp.next = new ListNode(head1.val);
            head1 = head1.next;
        } else {
            temp.next = new ListNode(head2.val);
            head2 = head2.next;
        }
        temp = temp.next;
    }
    // Process remaining nodes
    while (head1) {
        temp.next = new ListNode(head1.val);
        head1 = head1.next;
        temp = temp.next;
    }
    while (head2) {
        temp.next = new ListNode(head2.val);
        head2 = head2.next;
        temp = temp.next;
    }
    return head;
};

module.exports = mergeTwoLists;