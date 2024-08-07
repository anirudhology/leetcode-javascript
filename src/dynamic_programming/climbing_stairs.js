const climbStairs = n => {
    // Special cases
    if (n <= 0) {
        return 0;
    }
    if (n <= 2) {
        return n;
    }
    // Variables to store ways to climb previous two steps
    let a = 1;
    let b = 2;
    let c = a + b;
    for (let i = 3; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return c;
};

module.exports = climbStairs;