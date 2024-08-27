const plusOne = require('../../src/math/plus_one');

test('plusOne with no carry over', () => {
    expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
});

test('plusOne with carry over in middle', () => {
    expect(plusOne([1, 2, 9])).toEqual([1, 3, 0]);
});

test('plusOne with all nines', () => {
    expect(plusOne([9, 9, 9])).toEqual([1, 0, 0, 0]);
});

test('plusOne with empty array', () => {
    expect(plusOne([])).toEqual([1]);
});