const partitionLabels = require('../../src/greedy/partition_labels');

test('partitionLabels', () => {
    // Test null input
    expect(partitionLabels(null)).toEqual([]);

    // Test empty string
    expect(partitionLabels("")).toEqual([]);

    // Test string with all unique characters
    expect(partitionLabels("abcd")).toEqual([1, 1, 1, 1]);

    // Test string with all same characters
    expect(partitionLabels("aaaa")).toEqual([4]);

    // Test string with multiple partitions
    expect(partitionLabels("ababcbacadefegdehijhklij")).toEqual([9, 7, 8]);

    // Test string with overlapping partitions
    expect(partitionLabels("eababcbaca")).toEqual([1, 9]);
});

test('edge cases', () => {
    // Test single character string
    expect(partitionLabels("a")).toEqual([1]);

    // Test string with repeating characters
    expect(partitionLabels("abacaba")).toEqual([7]);
});