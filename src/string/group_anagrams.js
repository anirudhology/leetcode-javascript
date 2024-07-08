const groupAnagrams = strs => {
    // List to store the final output
    const groups = [];
    // Special case
    if (strs === undefined || strs.length === 0) {
        return groups;
    }
    // Map to store the frequencies and corresponding strings
    const mappings = new Map();
    // Process each string one by one
    for (let s of strs) {
        // Frequency map for the current string
        const frequencies = new Array(26).fill(0);
        for (let c of s) {
            frequencies[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        const key = frequencies.toString();
        // Check if the key already exists in the mappings or not
        if (!mappings.has(key)) {
            mappings.set(key, []);
        }
        mappings.get(key).push(s);
    }
    // Traverse through mappings and get all groups
    for (let group of mappings.values()) {
        groups.push(group);
    }
    return groups;
};

module.exports = groupAnagrams;