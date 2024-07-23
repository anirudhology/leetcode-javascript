const reverseList = require('../../src/linked_list/reverse_linked_list');
const ListNode = require('../../src/util/list_node');

describe('reverseList', () => {
    test('reverses an empty list', () => {
        expect(reverseList(null)).toBeNull();
    });

    test('reverses a single element list', () => {
        const head = new ListNode(1);
        const result = reverseList(head);
        expect(result.val).toBe(1);
        expect(result.next).toBeNull();
    });

    test('reverses a list with multiple elements', () => {
        const head = new ListNode(1);
        head.next = new ListNode(2);
        head.next.next = new ListNode(3);

        const result = reverseList(head);

        expect(result.val).toBe(3);
        expect(result.next.val).toBe(2);
        expect(result.next.next.val).toBe(1);
        expect(result.next.next.next).toBeNull();
    });

    test('reverses a two-element list', () => {
        const head = new ListNode(1);
        head.next = new ListNode(2);

        const result = reverseList(head);

        expect(result.val).toBe(2);
        expect(result.next.val).toBe(1);
        expect(result.next.next).toBeNull();
    });
});