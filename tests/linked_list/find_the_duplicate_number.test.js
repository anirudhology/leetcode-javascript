const findDuplicate = require('../../src/linked_list/find_the_duplicate_number');

test('findDuplicate single duplicate', () => {
    expect(findDuplicate([1, 3, 4, 2, 2])).toBe(2);
});

test('findDuplicate multiple duplicates', () => {
    expect(findDuplicate([3, 1, 3, 4, 2])).toBe(3);
});

test('findDuplicate duplicate at start', () => {
    expect(findDuplicate([1, 1])).toBe(1);
});

test('findDuplicate large input', () => {
    expect(findDuplicate([1, 3, 4, 2, 2])).toBe(2);
});

test('findDuplicate single number', () => {
    expect(findDuplicate([1, 1])).toBe(1);
});

test('findDuplicate random order', () => {
    expect(findDuplicate([4, 2, 1, 3, 2])).toBe(2);
});
