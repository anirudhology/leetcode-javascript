const checkValidString = require('../../src/greedy/valid_parenthesis_string');

test('checkValidString', () => {
    // Test empty string
    expect(checkValidString("")).toBe(true);

    // Test valid strings
    expect(checkValidString("()")).toBe(true);
    expect(checkValidString("(*)")).toBe(true);
    expect(checkValidString("(*))")).toBe(true);

    // Test invalid strings
    expect(checkValidString(")")).toBe(false);
    expect(checkValidString(")(")).toBe(false);
    expect(checkValidString("((*)")).toBe(true);
    expect(checkValidString("((*))(")).toBe(false);
});

test('edge cases', () => {
    // Test string with only one *
    expect(checkValidString("*")).toBe(true);

    // Test string with multiple *
    expect(checkValidString("***")).toBe(true);

    // Test strings with nested parentheses
    expect(checkValidString("(())")).toBe(true);
    expect(checkValidString("(()))")).toBe(false);
});