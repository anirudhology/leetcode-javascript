const DetectSquares = require('../../src/math/detect_squares');

test('add and count method', () => {
    const detectSquares = new DetectSquares();

    // Adding points
    detectSquares.add([1, 2]);
    detectSquares.add([2, 1]);
    detectSquares.add([1, 0]);
    detectSquares.add([0, 1]);

    // No squares should exist initially
    expect(detectSquares.count([1, 1])).toBe(0);

    // Adding points to form a square
    detectSquares.add([2, 2]);
    expect(detectSquares.count([1, 1])).toBe(1);

    // Adding a point to form a second square
    detectSquares.add([0, 0]);
    expect(detectSquares.count([1, 1])).toBe(2);
});

test('no squares exist', () => {
    const ds = new DetectSquares();

    // No points added, no squares should exist
    expect(ds.count([0, 0])).toBe(0);
});

test('multiple same points', () => {
    const ds = new DetectSquares();

    // Adding the same point multiple times
    ds.add([0, 0]);
    ds.add([0, 0]);
    ds.add([1, 1]);
    ds.add([1, 1]);
    ds.add([0, 1]);
    ds.add([1, 0]);

    // Two squares are formed
    expect(ds.count([0, 0])).toBe(2);
});