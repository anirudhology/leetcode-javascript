const pacificAtlantic = require('../../src/bfs/pacific_atlantic_water_flow');

describe('PacificAtlanticWaterFlow', () => {
    test('pacificAtlantic - empty grid', () => {
        const heights = [];
        const result = pacificAtlantic(heights);
        expect(result).toEqual([]);
    });

    test('pacificAtlantic - single cell grid', () => {
        const heights = [[1]];
        const result = pacificAtlantic(heights);
        expect(result).toEqual([[0, 0]]);
    });

    test('pacificAtlantic - flat grid', () => {
        const heights = [
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1]
        ];
        const result = pacificAtlantic(heights);
        expect(result.length).toBe(9); // All cells should be reachable by both oceans
    });

    test('pacificAtlantic - mountain grid', () => {
        const heights = [
            [1, 2, 2, 3, 5],
            [3, 2, 3, 4, 4],
            [2, 4, 5, 3, 1],
            [6, 7, 1, 4, 5],
            [5, 1, 1, 2, 4]
        ];
        const result = pacificAtlantic(heights);
        expect(result.length).toBe(7); // Specific cells should be reachable by both oceans
    });
});