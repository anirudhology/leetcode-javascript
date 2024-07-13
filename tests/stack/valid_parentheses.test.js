const validParentheses = require('../../src/stack/valid_parentheses');

describe('validParentheses', () => {
    test('should return true for empty string', () => {
        expect(validParentheses("")).toBe(true);
    });

    test('should return true for undefined input', () => {
        expect(validParentheses(undefined)).toBe(true);
    });

    test('should return false for single left parenthesis', () => {
        expect(validParentheses("(")).toBe(false);
    });

    test('should return false for single right parenthesis', () => {
        expect(validParentheses(")")).toBe(false);
    });

    test('should return false for single left brace', () => {
        expect(validParentheses("{")).toBe(false);
    });

    test('should return false for single right brace', () => {
        expect(validParentheses("}")).toBe(false);
    });

    test('should return false for single left bracket', () => {
        expect(validParentheses("[")).toBe(false);
    });

    test('should return false for single right bracket', () => {
        expect(validParentheses("]")).toBe(false);
    });

    test('should return true for valid simple parentheses', () => {
        expect(validParentheses("()")).toBe(true);
        expect(validParentheses("[]")).toBe(true);
        expect(validParentheses("{}")).toBe(true);
    });

    test('should return true for valid nested parentheses', () => {
        expect(validParentheses("({[]})")).toBe(true);
        expect(validParentheses("[{()}]")).toBe(true);
        expect(validParentheses("{[()]}")).toBe(true);
    });

    test('should return false for invalid mixed parentheses', () => {
        expect(validParentheses("(]")).toBe(false);
        expect(validParentheses("[)")).toBe(false);
        expect(validParentheses("{)")).toBe(false);
    });

    test('should return false for unmatched left parentheses', () => {
        expect(validParentheses("({[")).toBe(false);
    });

    test('should return false for unmatched right parentheses', () => {
        expect(validParentheses(")}]")).toBe(false);
    });

    test('should return true for valid complex parentheses', () => {
        expect(validParentheses("{[()()]()}")).toBe(true);
    });

    test('should return false for invalid complex parentheses', () => {
        expect(validParentheses("{[()([)]}")).toBe(false);
    });

    test('should return true for valid repeated characters', () => {
        expect(validParentheses("()()()")).toBe(true);
        expect(validParentheses("[][][]")).toBe(true);
        expect(validParentheses("{}{}{}")).toBe(true);
    });

    test('should return false for invalid repeated characters', () => {
        expect(validParentheses("((())")).toBe(false);
        expect(validParentheses("{{{{}}")).toBe(false);
        expect(validParentheses("[[[]]]")).toBe(true);
    });
});
