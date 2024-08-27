const plusOne = digits => {
    const n = digits.length;
    for (let i = n - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    const output = new Array(n + 1).fill(0);
    output[0] = 1;
    return output;
};

module.exports = plusOne;