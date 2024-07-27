const reverseKGroup = require('../../src/linked_list/reverse_nodes_in_k_groups');
const ListNode = require('../../src/util/list_node');

function createList(values) {
    const dummy = new ListNode();
    let current = dummy;
    for (let value of values) {
        current.next = new ListNode(value);
        current = current.next;
    }
    return dummy.next;
}

function listToArray(head) {
    const result = [];
    let current = head;
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}

test('reverseKGroup with null head', () => {
    const result = reverseKGroup(null, 3);
    expect(result).toBeNull();
});

test('reverseKGroup with single element', () => {
    const head = createList([1]);
    const result = reverseKGroup(head, 1);
    expect(listToArray(result)).toEqual([1]);
});

test('reverseKGroup with k greater than list length', () => {
    const head = createList([1, 2, 3]);
    const result = reverseKGroup(head, 4);
    expect(listToArray(result)).toEqual([1, 2, 3]);
});

test('reverseKGroup with k equals list length', () => {
    const head = createList([1, 2, 3]);
    const result = reverseKGroup(head, 3);
    expect(listToArray(result)).toEqual([3, 2, 1]);
});

test('reverseKGroup with multiple k-groups', () => {
    const head = createList([1, 2, 3, 4, 5]);
    const result = reverseKGroup(head, 2);
    expect(listToArray(result)).toEqual([2, 1, 4, 3, 5]);
});

test('reverseKGroup with remaining nodes less than k', () => {
    const head = createList([1, 2, 3, 4, 5]);
    const result = reverseKGroup(head, 3);
    expect(listToArray(result)).toEqual([3, 2, 1, 4, 5]);
});
