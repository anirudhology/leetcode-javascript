const evalRPN = require('../../src/stack/evaluate_reverse_polish_notation');

describe('evalRPN', () => {
    test('basic operations', () => {
        expect(evalRPN(["2", "1", "+", "3", "*"])).toBe(9);
        expect(evalRPN(["4", "13", "5", "/", "+"])).toBe(6);
        expect(evalRPN(["2", "3", "*", "4", "+"])).toBe(10);
        expect(evalRPN(["10", "6", "/", "9", "+"])).toBe(10);
    });

    test('single operation', () => {
        expect(evalRPN(["2", "3", "+"])).toBe(5);     // 2 + 3 = 5
        expect(evalRPN(["5", "3", "-"])).toBe(2);     // 5 - 3 = 2
        expect(evalRPN(["3", "4", "*"])).toBe(12);    // 3 * 4 = 12
        expect(evalRPN(["8", "4", "/"])).toBe(2);     // 8 / 4 = 2
    });

    test('negative numbers', () => {
        expect(evalRPN(["-2", "-1", "+"])).toBe(-3);
        expect(evalRPN(["-4", "-2", "/"])).toBe(2);
        expect(evalRPN(["-2", "3", "*"])).toBe(-6);
    });

    test('complex expressions', () => {
        expect(evalRPN(["3", "4", "+", "2", "*", "7", "/"])).toBe(2);
        expect(evalRPN(["5", "1", "2", "+", "4", "*", "+", "3", "-"])).toBe(14);
    });
});
