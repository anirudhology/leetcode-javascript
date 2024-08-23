const countBits = n => {
    // Lookup table to store count of set bits
    const lookup = new Array(n + 1).fill(0);
    // Exponent of 2
    let offset = 1;
    // Populate the table
    for (let i = 1; i <= n; i++) {
        if (offset * 2 === i) {
            offset *= 2;
        }
        lookup[i] = lookup[i - offset] + 1;
    }
    return lookup;
};

module.exports = countBits;