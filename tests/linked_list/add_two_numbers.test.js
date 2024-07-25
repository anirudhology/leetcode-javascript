const ListNode = require('../../src/util/list_node');
const addTwoNumbers = require('../../src/linked_list/add_two_numbers');

// Helper function to convert array to ListNode
const arrayToList = (array) => {
    let dummy = new ListNode();
    let current = dummy;
    array.forEach(val => {
        current.next = new ListNode(val);
        current = current.next;
    });
    return dummy.next;
};

// Helper function to convert ListNode to array
const listToArray = (node) => {
    let array = [];
    while (node) {
        array.push(node.val);
        node = node.next;
    }
    return array;
};

describe('addTwoNumbers', () => {
    test('both lists are empty', () => {
        expect(addTwoNumbers(null, null)).toBeNull();
    });

    test('first list is empty', () => {
        const l2 = arrayToList([1, 2, 3]);
        const result = addTwoNumbers(null, l2);
        expect(listToArray(result)).toEqual([1, 2, 3]);
    });

    test('second list is empty', () => {
        const l1 = arrayToList([4, 5, 6]);
        const result = addTwoNumbers(l1, null);
        expect(listToArray(result)).toEqual([4, 5, 6]);
    });

    test('lists of same length with no carry', () => {
        const l1 = arrayToList([2, 4, 3]);
        const l2 = arrayToList([5, 6, 4]);
        const result = addTwoNumbers(l1, l2);
        expect(listToArray(result)).toEqual([7, 0, 8]);
    });

    test('lists of different lengths without carry', () => {
        let l1 = arrayToList([9, 9]);
        let l2 = arrayToList([1]);
        let result = addTwoNumbers(l1, l2);
        expect(listToArray(result)).toEqual([0, 0, 1]);

        l1 = arrayToList([1]);
        l2 = arrayToList([9, 9]);
        result = addTwoNumbers(l1, l2);
        expect(listToArray(result)).toEqual([0, 0, 1]);
    });

    test('lists of same length with carry', () => {
        const l1 = arrayToList([9, 9, 9]);
        const l2 = arrayToList([1]);
        const result = addTwoNumbers(l1, l2);
        expect(listToArray(result)).toEqual([0, 0, 0, 1]);
    });
});