const getSum = (a, b) => {
    return add(a, b);
};

const add = (a, b) => {
    if (a === 0 || b === 0) {
        return a | b;
    }
    return add(a ^ b, (a & b) << 1);
}

module.exports = getSum;