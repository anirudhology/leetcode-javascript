const leastInterval = require('../../src/heap/task_scheduler');

describe('TaskScheduler', () => {
    test('Empty tasks', () => {
        expect(leastInterval([], 2)).toBe(0);
    });

    test('Null tasks', () => {
        expect(leastInterval(null, 2)).toBe(0);
    });

    test('Single task', () => {
        expect(leastInterval(['A'], 2)).toBe(1);
    });

    test('Multiple tasks with cooldown', () => {
        expect(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 2)).toBe(8);
    });

    test('Multiple tasks no cooldown', () => {
        expect(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 0)).toBe(6);
    });

    test('Complex task pattern', () => {
        expect(leastInterval(['A', 'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D'], 2)).toBe(9);
    });
});