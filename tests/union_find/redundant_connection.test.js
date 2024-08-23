const findRedundantConnection = require('../../src/union_find/redundant_connection');

test('findRedundantConnection', () => {
    expect(findRedundantConnection([[1, 2], [1, 3], [2, 3]])).toEqual([2, 3]);
    expect(findRedundantConnection([[1, 2], [2, 3], [3, 4], [4, 5], [1, 5]])).toEqual([1, 5]);
});