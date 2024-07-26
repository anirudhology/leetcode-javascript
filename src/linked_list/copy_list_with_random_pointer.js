const ListNodeWithRandom = require('../../src/util/list_node_with_random');

const copyRandomList = head => {
    // Special case
    if (head === null) {
        return null;
    }
    // Map to store the mappings of original and cloned nodes
    const mappings = new Map();
    // Head for the cloned list
    let clone = null;
    // Pointers to traverse through both lists
    let temp = head;
    let cloneTemp = null;
    // Start traversing
    while (temp !== null) {
        const copy = new ListNodeWithRandom(temp.val);
        if (clone === null) {
            clone = copy;
            cloneTemp = clone;
        } else {
            cloneTemp.next = copy;
            cloneTemp = cloneTemp.next;
        }
        // Add mapping
        mappings.set(temp, cloneTemp);
        temp = temp.next;
    }
    // Reset both pointers
    temp = head;
    cloneTemp = clone;
    // Again traverse the list
    while (temp !== null) {
        if (temp.random !== null) {
            cloneTemp.random = mappings.get(temp.random);
        }
        temp = temp.next;
        cloneTemp = cloneTemp.next;
    }
    return clone;
};

module.exports = copyRandomList;