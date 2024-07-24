const reorderList = require('../../src/linked_list/reorder_list');
const ListNode = require('../../src/util/list_node');

// Utility function to build a linked list from an array
const buildList = (values) => {
    if (!values.length) return null;
    let head = new ListNode(values[0]);
    let current = head;
    for (let i = 1; i < values.length; i++) {
        current.next = new ListNode(values[i]);
        current = current.next;
    }
    return head;
};

// Utility function to convert a linked list to an array
const listToArray = (head) => {
    const result = [];
    let current = head;
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    return result;
};

describe('reorderList', () => {
    test('reorder an empty list', () => {
        let head = buildList([]);
        reorderList(head);
        expect(head).toBeNull();
    });

    test('reorder a single element list', () => {
        let head = buildList([1]);
        reorderList(head);
        expect(listToArray(head)).toEqual([1]);
    });

    test('reorder a two-element list', () => {
        let head = buildList([1, 2]);
        reorderList(head);
        expect(listToArray(head)).toEqual([1, 2]);
    });

    test('reorder a three-element list', () => {
        let head = buildList([1, 2, 3]);
        reorderList(head);
        expect(listToArray(head)).toEqual([1, 3, 2]);
    });

    test('reorder a four-element list', () => {
        let head = buildList([1, 2, 3, 4]);
        reorderList(head);
        expect(listToArray(head)).toEqual([1, 4, 2, 3]);
    });

    test('reorder an odd-number of elements list', () => {
        let head = buildList([1, 2, 3, 4, 5]);
        reorderList(head);
        expect(listToArray(head)).toEqual([1, 5, 2, 4, 3]);
    });

    test('reorder an even-number of elements list', () => {
        let head = buildList([1, 2, 3, 4, 5, 6]);
        reorderList(head);
        expect(listToArray(head)).toEqual([1, 6, 2, 5, 3, 4]);
    });
});