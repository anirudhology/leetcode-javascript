const findOrder = require('../../src/graph/course_schedule_ii');

describe('CourseScheduleII', () => {
    test('find order with valid prerequisites', () => {
        expect(findOrder(2, [[1, 0]])).toEqual([0, 1]);
    });

    test('find order with cycle in prerequisites', () => {
        expect(findOrder(2, [[1, 0], [0, 1]])).toEqual([]);
    });

    test('find order with complex graph', () => {
        expect(findOrder(4, [[1, 0], [2, 1], [3, 2]])).toEqual([0, 1, 2, 3]);
    });
});