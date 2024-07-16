const generateParentheses = require('../../src/stack/generate_parentheses');

describe('generateParentheses', () => {
    test('n is zero', () => {
        expect(generateParentheses(0)).toEqual([]);
    });

    test('n is negative', () => {
        expect(generateParentheses(-1)).toEqual([]);
    });

    test('n is one', () => {
        expect(generateParentheses(1)).toEqual(['()']);
    });

    test('n is two', () => {
        expect(new Set(generateParentheses(2))).toEqual(new Set(['(())', '()()']));
    });

    test('n is three', () => {
        expect(new Set(generateParentheses(3))).toEqual(new Set(['((()))', '(()())', '(())()', '()(())', '()()()']));
    });

    test('n is four', () => {
        expect(new Set(generateParentheses(4))).toEqual(new Set(['(((())))', '((()()))', '((())())', '((()))()', '(()(()))', '(()()())', '(()())()', '(())(())', '(())()()', '()((()))', '()(()())', '()(())()', '()()(())', '()()()()']));
    });
});
