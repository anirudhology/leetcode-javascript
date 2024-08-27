const myPow = (x, n) => {
    if (n === 0) {
        return 1;
    }
    if (n < 0) {
        return 1 / x * myPow(1 / x, -n - 1);
    }
    return n % 2 == 0 ? myPow(x * x, Math.floor(n / 2)) : x * myPow(x * x, Math.floor(n / 2));
};

module.exports = myPow;