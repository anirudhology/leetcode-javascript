const TimeMap = require('../../src/binary_search/time_based_key_value_store');

describe('TimeMap', () => {
    let timeMap;

    beforeEach(() => {
        timeMap = new TimeMap();
    });

    test('should return empty string if key does not exist', () => {
        expect(timeMap.get("nonexistent", 1)).toBe("");
    });

    test('should set and get a single key-value pair correctly', () => {
        timeMap.set("foo", "bar", 1);
        expect(timeMap.get("foo", 1)).toBe("bar");
        expect(timeMap.get("foo", 2)).toBe("bar");
    });

    test('should handle multiple sets and gets correctly', () => {
        timeMap.set("foo", "bar", 1);
        timeMap.set("foo", "bar2", 4);
        expect(timeMap.get("foo", 1)).toBe("bar");
        expect(timeMap.get("foo", 3)).toBe("bar");
        expect(timeMap.get("foo", 4)).toBe("bar2");
        expect(timeMap.get("foo", 5)).toBe("bar2");
    });

    test('should handle edge case with timestamp 0', () => {
        timeMap.set("foo", "bar", 0);
        expect(timeMap.get("foo", 0)).toBe("bar");
        expect(timeMap.get("foo", 1)).toBe("bar");
    });

    test('should return empty string for timestamp earlier than first set', () => {
        timeMap.set("foo", "bar", 2);
        expect(timeMap.get("foo", 1)).toBe("");
    });

    test('should handle setting multiple keys correctly', () => {
        timeMap.set("foo", "bar", 1);
        timeMap.set("baz", "qux", 2);
        expect(timeMap.get("foo", 1)).toBe("bar");
        expect(timeMap.get("baz", 2)).toBe("qux");
        expect(timeMap.get("foo", 2)).toBe("bar");
        expect(timeMap.get("baz", 1)).toBe("");
    });

    test('should handle large timestamps correctly', () => {
        timeMap.set("foo", "bar", 1000000);
        expect(timeMap.get("foo", 1000000)).toBe("bar");
        expect(timeMap.get("foo", 999999)).toBe("");
    });

    test('should return the latest value before given timestamp', () => {
        timeMap.set("foo", "bar1", 1);
        timeMap.set("foo", "bar2", 3);
        timeMap.set("foo", "bar3", 5);
        expect(timeMap.get("foo", 4)).toBe("bar2");
        expect(timeMap.get("foo", 5)).toBe("bar3");
        expect(timeMap.get("foo", 6)).toBe("bar3");
    });

    test('should handle repeated timestamps correctly', () => {
        timeMap.set("foo", "bar1", 1);
        timeMap.set("foo", "bar2", 1);
        timeMap.set("foo", "bar3", 1);
        expect(timeMap.get("foo", 1)).toBe("bar3");
    });
});
