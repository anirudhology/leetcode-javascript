const letterCombinations = require('../../src/backtracking/letter_combinations_of_a_phone_number');

test('letterCombinations', () => {
    expect(letterCombinations("23")).toEqual(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]);
    expect(letterCombinations("")).toEqual([]);
    expect(letterCombinations("2")).toEqual(["a", "b", "c"]);
    expect(letterCombinations("9")).toEqual(["w", "x", "y", "z"]);
    expect(letterCombinations("1")).toEqual([]);
    expect(letterCombinations("10")).toEqual([]);
});