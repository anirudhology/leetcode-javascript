// carFleet.test.js
const carFleet = require('../../src/stack/car_fleet');

describe('carFleet', () => {

    test('should return 0 for no cars', () => {
        expect(carFleet(10, [], [])).toBe(0);
    });

    test('should return 0 for negative target', () => {
        expect(carFleet(-10, [0, 3, 5], [1, 2, 1])).toBe(0);
    });

    test('should return 1 for a single car', () => {
        expect(carFleet(10, [5], [2])).toBe(1);
    });

    test('should return 1 for all cars with same position and speed', () => {
        expect(carFleet(10, [1, 1, 1], [1, 1, 1])).toBe(1);
    });

    test('should return correct fleet count for cars with different positions and speeds', () => {
        expect(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3])).toBe(3);
    });

    test('should return 1 for cars with same position but different speeds', () => {
        expect(carFleet(10, [3, 3, 3], [1, 2, 3])).toBe(1);
    });

    test('should return correct fleet count for cars with same speed but different positions', () => {
        expect(carFleet(10, [0, 4, 2], [2, 2, 2])).toBe(3);
    });

    test('should return correct fleet count for cars forming one fleet', () => {
        expect(carFleet(10, [6, 8], [3, 2])).toBe(2);
    });

    test('should return correct fleet count for cars forming multiple fleets', () => {
        expect(carFleet(15, [5, 10, 0, 7], [2, 1, 3, 2])).toBe(1);
    });

    test('should return correct fleet count for an example case', () => {
        expect(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3])).toBe(3);
    });

});
