const canFinish = require('../../src/graph/course_schedule');

describe('CourseSchedule', () => {
    test('can finish with no prerequisites', () => {
        expect(canFinish(3, [])).toBe(true);
    });

    test('can finish with valid prerequisites', () => {
        expect(canFinish(2, [[1, 0]])).toBe(true);
    });

    test('cannot finish with cycle in prerequisites', () => {
        expect(canFinish(2, [[1, 0], [0, 1]])).toBe(false);
    });

    test('can finish with complex graph', () => {
        expect(canFinish(4, [[1, 0], [2, 1], [3, 2]])).toBe(true);
    });

    test('can finish with isolated courses', () => {
        expect(canFinish(5, [[1, 0], [3, 2]])).toBe(true);
    });
});