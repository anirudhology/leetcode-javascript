/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    // Capacity of the cache
    this.capacity = capacity;
    // Size or number of entries in the cache
    this.size = 0;
    // Map to store mappings with key and entries
    this.entries = new Map();
    // Head of the list
    this.head = null;
    // Tail of the list
    this.tail = null;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    // If the key already exists in the cache
    if (this.entries.has(key)) {
        // Get node corresponding to the key
        const entry = this.entries.get(key);
        // Delete the node from its current position and add to head
        this.deleteEntry(entry);
        this.updateHead(entry);
        return entry.value;
    }
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    // If the key is already in the map
    if (this.entries.get(key)) {
        // Get entry corresponding to key
        const entry = this.entries.get(key);
        // Update the value
        entry.value = value;
        // Delete entry from its current position and move to head
        this.deleteEntry(entry);
        this.updateHead(entry);
    } else {
        // Create a new node
        const entry = new Entry(key, value);
        if (this.size >= this.capacity) {
            // Remove entry from the tail and mappings
            this.entries.delete(this.tail.key);
            this.deleteEntry(this.tail);
        }
        // Update head
        this.updateHead(entry);
        this.entries.set(key, entry);
        this.size++;
    }
};

LRUCache.prototype.deleteEntry = function (entry) {
    // If given entry is not head
    if (entry !== this.head) {
        entry.previous.next = entry.next;
    } else {
        this.head = entry.next;
    }
    // If given entry is not tail
    if (entry !== this.tail) {
        entry.next.previous = entry.previous;
    } else {
        this.tail = entry.previous;
    }
}

LRUCache.prototype.updateHead = function (entry) {
    // Make entry as the new head
    entry.next = this.head;
    entry.previous = null;
    // If head is not null
    if (this.head !== null) {
        this.head.previous = entry;
    }
    // Update the head
    this.head = entry;
    // If there is only one node
    if (this.tail === null) {
        this.tail = entry;
    }
}

class Entry {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.previous = null;
        this.next = null;
    }
}

module.exports = LRUCache;