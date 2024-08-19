const minInterval = require('../../src/intervals/minimum_interval_to_include_each_query');

describe('minInterval', () => {

    it('should return the correct intervals for valid queries and intervals', () => {
        const intervals = [[1, 4], [2, 4], [3, 6]];
        const queries = [2, 3, 4, 5];
        const expectedResult = [3, 3, 3, 4]; // The expected result based on the query

        const result = minInterval(intervals, queries);
        expect(result).toEqual(expectedResult);
    });

    it('should return -1 for queries with no matching intervals', () => {
        const intervals = [[1, 4], [2, 4]];
        const queries = [5, 6, 7];
        const expectedResult = [-1, -1, -1]; // No intervals match the query values

        const result = minInterval(intervals, queries);
        expect(result).toEqual(expectedResult);
    });

    it('should handle edge cases with empty intervals', () => {
        const intervals = [];
        const queries = [1, 2, 3];
        const expectedResult = [-1, -1, -1]; // No intervals are present to match queries

        const result = minInterval(intervals, queries);
        expect(result).toEqual(expectedResult);
    });

    it('should handle edge cases with empty queries', () => {
        const intervals = [[1, 2], [3, 5]];
        const queries = [];
        const expectedResult = []; // No queries to process

        const result = minInterval(intervals, queries);
        expect(result).toEqual(expectedResult);
    });

    it('should return the correct result when queries are inside intervals', () => {
        const intervals = [[1, 2], [2, 4], [3, 6]];
        const queries = [1, 3, 5];
        const expectedResult = [2, 3, 4]; // Intervals that cover the queries

        const result = minInterval(intervals, queries);
        expect(result).toEqual(expectedResult);
    });

    it('should handle multiple intervals containing the same query', () => {
        const intervals = [[1, 4], [2, 5], [3, 6]];
        const queries = [4];
        const expectedResult = [4]; // The smallest interval that includes the query

        const result = minInterval(intervals, queries);
        expect(result).toEqual(expectedResult);
    });

    it('should handle intervals and queries of length 1', () => {
        const intervals = [[1, 2]];
        const queries = [2];
        const expectedResult = [2]; // Only one interval that includes the query

        const result = minInterval(intervals, queries);
        expect(result).toEqual(expectedResult);
    });

    it('should return correct result for overlapping intervals', () => {
        const intervals = [[1, 3], [2, 4], [3, 5]];
        const queries = [3];
        const expectedResult = [3]; // The smallest interval that includes the query

        const result = minInterval(intervals, queries);
        expect(result).toEqual(expectedResult);
    });

});