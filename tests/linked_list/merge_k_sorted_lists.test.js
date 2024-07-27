const mergeKLists = require('../../src/linked_list/merge_k_sorted_lists');
const ListNode = require('../../src/util/list_node');

// Helper function to create a linked list from an array
function createLinkedList(arr) {
    let dummy = new ListNode();
    let current = dummy;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummy.next;
}

// Helper function to convert a linked list to an array
function linkedListToArray(list) {
    let arr = [];
    while (list) {
        arr.push(list.val);
        list = list.next;
    }
    return arr;
}

test('mergeKLists with empty input', () => {
    expect(mergeKLists([])).toBe(null);
    expect(mergeKLists([null, null])).toBe(null);
});

test('mergeKLists with single list', () => {
    let list = createLinkedList([1, 2, 3]);
    expect(linkedListToArray(mergeKLists([list]))).toEqual([1, 2, 3]);
});

test('mergeKLists with multiple lists', () => {
    let list1 = createLinkedList([1, 4, 5]);
    let list2 = createLinkedList([1, 3, 4]);
    let list3 = createLinkedList([2, 6]);

    let mergedList = mergeKLists([list1, list2, list3]);
    expect(linkedListToArray(mergedList)).toEqual([1, 1, 2, 3, 4, 4, 5, 6]);
});

test('mergeKLists with lists of different lengths', () => {
    let list1 = createLinkedList([1, 3]);
    let list2 = createLinkedList([2]);
    let list3 = createLinkedList([4, 5, 6]);

    let mergedList = mergeKLists([list1, list2, list3]);
    expect(linkedListToArray(mergedList)).toEqual([1, 2, 3, 4, 5, 6]);
});

test('mergeKLists with null and non-null lists', () => {
    let list1 = createLinkedList([1, 3, 5]);
    let list2 = null;
    let list3 = createLinkedList([2, 4, 6]);

    let mergedList = mergeKLists([list1, list2, list3]);
    expect(linkedListToArray(mergedList)).toEqual([1, 2, 3, 4, 5, 6]);
});
