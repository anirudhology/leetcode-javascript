const reverse = x => {
    const maxValue = 2147483647; // 2^31 - 1
    let xReverse = 0;
    let num = Math.abs(x);

    while (num !== 0) {
        let remainder = num % 10;
        // Check for overflow before multiplying by 10
        if (xReverse > Math.floor(maxValue / 10) ||
            (xReverse === Math.floor(maxValue / 10) && remainder > maxValue % 10)) {
            return 0;
        }
        xReverse = 10 * xReverse + remainder;
        num = Math.floor(num / 10);
    }

    return x < 0 ? -xReverse : xReverse;
};

module.exports = reverse;