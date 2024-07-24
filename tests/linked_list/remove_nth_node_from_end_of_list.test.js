const removeNthFromEnd = require('../../src/linked_list/remove_nth_node_from_end_of_list');
const ListNode = require('../../src/util/list_node');

function listToArray(head) {
    const result = [];
    let current = head;
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}

function arrayToList(array) {
    if (!array.length) return null;
    const head = new ListNode(array[0]);
    let current = head;
    for (let i = 1; i < array.length; i++) {
        current.next = new ListNode(array[i]);
        current = current.next;
    }
    return head;
}

describe('removeNthFromEnd', () => {
    test('should handle an empty list', () => {
        const head = null;
        const n = 1;
        const result = removeNthFromEnd(head, n);
        expect(result).toBeNull();
    });

    test('should handle a single node', () => {
        const head = new ListNode(1);
        const n = 1;
        const result = removeNthFromEnd(head, n);
        expect(result).toBeNull();
    });

    test('should remove the first node', () => {
        const head = arrayToList([1, 2, 3]);
        const n = 3;
        const result = removeNthFromEnd(head, n);
        expect(listToArray(result)).toEqual([2, 3]);
    });

    test('should remove the last node', () => {
        const head = arrayToList([1, 2, 3]);
        const n = 1;
        const result = removeNthFromEnd(head, n);
        expect(listToArray(result)).toEqual([1, 2]);
    });

    test('should remove a middle node', () => {
        const head = arrayToList([1, 2, 3, 4]);
        const n = 2;
        const result = removeNthFromEnd(head, n);
        expect(listToArray(result)).toEqual([1, 2, 4]);
    });
});
