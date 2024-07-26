const ListNodeWithRandom = require('../../src/util/list_node_with_random');
const copyRandomList = require('../../src/linked_list/copy_list_with_random_pointer');

describe('copyRandomList', () => {

    const listToArray = (head) => {
        const array = [];
        const randomIndices = [];
        const indexMap = new Map();
        let index = 0;
        let temp = head;
        while (temp) {
            array.push(temp.val);
            indexMap.set(temp, index);
            temp = temp.next;
            index++;
        }
        temp = head;
        while (temp) {
            if (temp.random) {
                randomIndices.push(indexMap.get(temp.random));
            } else {
                randomIndices.push(null);
            }
            temp = temp.next;
        }
        return { array, randomIndices };
    };

    it('should return null for an empty list', () => {
        expect(copyRandomList(null)).toBeNull();
    });

    it('should copy a single node list without random pointer', () => {
        const node = new ListNodeWithRandom(1);
        const clonedHead = copyRandomList(node);
        expect(clonedHead).not.toBeNull();
        expect(clonedHead.val).toBe(1);
        expect(clonedHead.next).toBeNull();
        expect(clonedHead.random).toBeNull();
    });

    it('should copy a single node list with random pointer to itself', () => {
        const node = new ListNodeWithRandom(1);
        node.random = node;
        const clonedHead = copyRandomList(node);
        expect(clonedHead).not.toBeNull();
        expect(clonedHead.val).toBe(1);
        expect(clonedHead.next).toBeNull();
        expect(clonedHead.random).toBe(clonedHead);
    });

    it('should copy a list with multiple nodes without random pointers', () => {
        const node1 = new ListNodeWithRandom(1);
        const node2 = new ListNodeWithRandom(2);
        const node3 = new ListNodeWithRandom(3);
        node1.next = node2;
        node2.next = node3;
        const clonedHead = copyRandomList(node1);
        expect(clonedHead).not.toBeNull();
        expect(clonedHead.val).toBe(1);
        expect(clonedHead.next.val).toBe(2);
        expect(clonedHead.next.next.val).toBe(3);
        expect(clonedHead.next.next.next).toBeNull();
    });

    it('should copy a list with multiple nodes with random pointers', () => {
        const node1 = new ListNodeWithRandom(1);
        const node2 = new ListNodeWithRandom(2);
        const node3 = new ListNodeWithRandom(3);
        node1.next = node2;
        node2.next = node3;
        node1.random = node3;
        node2.random = node1;
        const clonedHead = copyRandomList(node1);
        expect(clonedHead).not.toBeNull();
        expect(clonedHead.val).toBe(1);
        expect(clonedHead.next.val).toBe(2);
        expect(clonedHead.next.next.val).toBe(3);
        expect(clonedHead.next.next.next).toBeNull();
        expect(clonedHead.random.val).toBe(3);
        expect(clonedHead.next.random.val).toBe(1);
    });

    it('should maintain the original and cloned lists separately', () => {
        const node1 = new ListNodeWithRandom(1);
        const node2 = new ListNodeWithRandom(2);
        node1.next = node2;
        const clonedHead = copyRandomList(node1);
        expect(clonedHead).not.toBeNull();
        expect(clonedHead).not.toBe(node1);
        expect(clonedHead.next).not.toBe(node2);
        node1.val = 10;
        expect(clonedHead.val).toBe(1);
    });
});
