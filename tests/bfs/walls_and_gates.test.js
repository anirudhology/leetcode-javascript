const wallsAndGates = require('../../src/bfs/walls_and_gates');

test('null rooms', () => {
    expect(wallsAndGates(null)).toBeNull();
});

test('empty rooms', () => {
    const rooms = [];
    expect(wallsAndGates(rooms)).toEqual(rooms);
});

test('single room with gate', () => {
    const rooms = [[0]];
    const expected = [[0]];
    expect(wallsAndGates(rooms)).toEqual(expected);
});

test('single room with wall', () => {
    const rooms = [[-1]];
    const expected = [[-1]];
    expect(wallsAndGates(rooms)).toEqual(expected);
});

test('single room with empty', () => {
    const rooms = [[2147483647]];
    const expected = [[2147483647]];
    expect(wallsAndGates(rooms)).toEqual(expected);
});

test('grid with multiple gates', () => {
    const rooms = [
        [2147483647, -1, 0, 2147483647],
        [2147483647, 2147483647, 2147483647, -1],
        [2147483647, -1, 2147483647, -1],
        [0, -1, 2147483647, 2147483647]
    ];
    const expected = [
        [3, -1, 0, 1],
        [2, 2, 1, -1],
        [1, -1, 2, -1],
        [0, -1, 3, 4]
    ];
    expect(wallsAndGates(rooms)).toEqual(expected);
});

test('grid with no gates', () => {
    const rooms = [
        [2147483647, -1, 2147483647, 2147483647],
        [2147483647, 2147483647, 2147483647, -1],
        [2147483647, -1, 2147483647, -1],
        [2147483647, -1, 2147483647, 2147483647]
    ];
    expect(wallsAndGates(rooms)).toEqual(rooms);
});
