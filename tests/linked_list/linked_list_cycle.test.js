const linkedListCycle = require('../../src/linked_list/linked_list_cycle');
const ListNode = require('../../src/util/list_node');

describe('linkedListCycle', () => {
    test('returns false for an empty list', () => {
        expect(linkedListCycle(null)).toBe(false);
    });

    test('returns false for a list with one node and no cycle', () => {
        const head = new ListNode(1);
        expect(linkedListCycle(head)).toBe(false);
    });

    test('returns false for a list with multiple nodes and no cycle', () => {
        const head = new ListNode(1);
        head.next = new ListNode(2);
        head.next.next = new ListNode(3);
        expect(linkedListCycle(head)).toBe(false);
    });

    test('returns true for a list with a cycle', () => {
        const head = new ListNode(1);
        const second = new ListNode(2);
        const third = new ListNode(3);
        head.next = second;
        second.next = third;
        third.next = second; // Creating a cycle
        expect(linkedListCycle(head)).toBe(true);
    });

    test('returns true for a cycle at the head', () => {
        const head = new ListNode(1);
        const second = new ListNode(2);
        head.next = second;
        second.next = head; // Creating a cycle at the head
        expect(linkedListCycle(head)).toBe(true);
    });

    test('returns true for a cycle at the middle', () => {
        const head = new ListNode(1);
        const second = new ListNode(2);
        const third = new ListNode(3);
        const fourth = new ListNode(4);
        head.next = second;
        second.next = third;
        third.next = fourth;
        fourth.next = second; // Creating a cycle at the second node
        expect(linkedListCycle(head)).toBe(true);
    });
});
