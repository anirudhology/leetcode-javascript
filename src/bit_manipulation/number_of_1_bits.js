const hammingWeight = n => {
    let setBits = 0;
    while (n > 0) {
        n &= (n - 1);
        setBits++;
    }
    return setBits;
};

module.exports = hammingWeight;