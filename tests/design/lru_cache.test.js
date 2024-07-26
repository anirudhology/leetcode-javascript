const LRUCache = require('../../src/design/lru_cache');

describe('LRUCache', () => {
    let cache;

    beforeEach(() => {
        cache = new LRUCache(2);
    });

    test('should return -1 for get operations on an empty cache', () => {
        expect(cache.get(1)).toBe(-1);
    });

    test('should put and get values correctly', () => {
        cache.put(1, 1);
        cache.put(2, 2);
        expect(cache.get(1)).toBe(1); // Returns 1
        cache.put(3, 3);              // Evicts key 2
        expect(cache.get(2)).toBe(-1); // Returns -1 (not found)
        cache.put(4, 4);              // Evicts key 1
        expect(cache.get(1)).toBe(-1); // Returns -1 (not found)
        expect(cache.get(3)).toBe(3); // Returns 3
        expect(cache.get(4)).toBe(4); // Returns 4
    });

    test('should update value when key already exists', () => {
        cache.put(1, 1);
        cache.put(1, 10);
        expect(cache.get(1)).toBe(10); // Returns 10
    });

    test('should evict the least recently used item when capacity is reached', () => {
        cache.put(1, 1);
        cache.put(2, 2);
        cache.put(3, 3); // Evicts key 1
        expect(cache.get(1)).toBe(-1); // Returns -1 (not found)
        expect(cache.get(2)).toBe(2); // Returns 2
        expect(cache.get(3)).toBe(3); // Returns 3
    });

    test('should move the accessed item to the head', () => {
        cache.put(1, 1);
        cache.put(2, 2);
        expect(cache.get(1)).toBe(1); // Returns 1 and moves key 1 to head
        cache.put(3, 3);              // Evicts key 2
        expect(cache.get(2)).toBe(-1); // Returns -1 (not found)
        expect(cache.get(1)).toBe(1); // Returns 1
        expect(cache.get(3)).toBe(3); // Returns 3
    });

    test('should handle duplicate puts correctly', () => {
        cache.put(1, 1);
        cache.put(2, 2);
        cache.put(1, 10); // Update key 1
        expect(cache.get(1)).toBe(10); // Returns 10
        cache.put(3, 3);               // Evicts key 2
        expect(cache.get(2)).toBe(-1); // Returns -1 (not found)
        expect(cache.get(1)).toBe(10); // Returns 10
        expect(cache.get(3)).toBe(3);  // Returns 3
    });

    test('should handle edge cases of capacity 1', () => {
        cache = new LRUCache(1);
        cache.put(1, 1);
        expect(cache.get(1)).toBe(1); // Returns 1
        cache.put(2, 2);              // Evicts key 1
        expect(cache.get(1)).toBe(-1); // Returns -1 (not found)
        expect(cache.get(2)).toBe(2); // Returns 2
    });
});
