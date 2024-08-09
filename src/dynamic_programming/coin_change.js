const coinChange = (coins, amount) => {
    // Special case
    if (coins === null || coins.length === 0 || amount < 0) {
        return -1;
    }
    // Lookup table to store ways to make amount i
    const lookup = new Array(amount + 1).fill(Number.MAX_SAFE_INTEGER);
    lookup[0] = 0;
    // Fill the table
    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            if (coin <= i) {
                const difference = lookup[i - coin];
                if (difference !== Number.MAX_SAFE_INTEGER) {
                    lookup[i] = Math.min(lookup[i], difference + 1);
                }
            }
        }
    }
    return lookup[amount] === Number.MAX_SAFE_INTEGER ? -1 : lookup[amount];
};

module.exports = coinChange;