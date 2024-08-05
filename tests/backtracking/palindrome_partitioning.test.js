const partition = require('../../src/backtracking/palindrome_partitioning');

test('partition', () => {
    expect(partition("aab")).toEqual([["a", "a", "b"], ["aa", "b"]]);
    expect(partition("a")).toEqual([["a"]]);
    expect(partition("")).toEqual([]);
    expect(partition("aba")).toEqual([["a", "b", "a"], ["aba"]]);
});
