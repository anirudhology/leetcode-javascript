const mergeTwoLists = require('../../src/linked_list/merge_two_sorted_lists');
const ListNode = require('../../src/util/list_node');

describe('mergeTwoLists', () => {
    it('should merge two sorted lists', () => {
        const list1 = new ListNode(1, new ListNode(3, new ListNode(5)));
        const list2 = new ListNode(2, new ListNode(4, new ListNode(6)));
        const mergedList = mergeTwoLists(list1, list2);

        expect(mergedList.val).toBe(1);
        expect(mergedList.next.val).toBe(2);
        expect(mergedList.next.next.val).toBe(3);
        expect(mergedList.next.next.next.val).toBe(4);
        expect(mergedList.next.next.next.next.val).toBe(5);
        expect(mergedList.next.next.next.next.next.val).toBe(6);
    });

    it('should return the non-null list if one list is null', () => {
        const list1 = null;
        const list2 = new ListNode(1, new ListNode(2, new ListNode(3)));
        const mergedList = mergeTwoLists(list1, list2);

        expect(mergedList.val).toBe(1);
        expect(mergedList.next.val).toBe(2);
        expect(mergedList.next.next.val).toBe(3);
    });

    it('should return null if both lists are null', () => {
        const list1 = null;
        const list2 = null;
        const mergedList = mergeTwoLists(list1, list2);

        expect(mergedList).toBeNull();
    });
});