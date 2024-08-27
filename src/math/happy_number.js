const isHappy = n => {
    if (n === 1 || n === 7) {
        return true;
    }
    while (n > 9) {
        n = calculateSquareOfDigits(n);
        if (n === 1 || n === 7) {
            return true;
        }
    }
    return false;
};

const calculateSquareOfDigits = n => {
    let square = 0;
    while (n > 0) {
        let remainder = n % 10;
        square += remainder * remainder;
        n = Math.floor(n / 10);
    }
    return square;
}

module.exports = isHappy;