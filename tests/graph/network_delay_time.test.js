const networkDelayTime = require('../../src/graph/network_delay_time');

describe('NetworkDelayTime', () => {

    test('Basic case with all nodes reachable', () => {
        expect(networkDelayTime([[2, 1, 1], [2, 3, 1], [3, 4, 1]], 4, 2)).toBe(2);
    });

    test('Node unreachable', () => {
        expect(networkDelayTime([[1, 2, 1]], 2, 1)).toBe(1);
    });

    test('Single node, self delay is 0', () => {
        expect(networkDelayTime([], 1, 1)).toBe(0);
    });

    test('All nodes connected in a line', () => {
        expect(networkDelayTime([[1, 2, 1], [2, 3, 1], [3, 4, 1]], 4, 1)).toBe(3);
    });

    test('Empty times array, unreachable nodes', () => {
        expect(networkDelayTime([], 2, 1)).toBe(-1);
    });

    test('Cycle in the graph', () => {
        expect(networkDelayTime([[1, 2, 1], [2, 3, 2], [3, 1, 3]], 3, 1)).toBe(3);
    });

});