const change = (amount, coins) => {
    // Special case
    if (!coins || amount < 0) {
        return 0
    }
    // Lookup table to store number of ways to make amount
    const lookup = new Array(amount + 1).fill(0);
    // There is one way to make amount = 0;
    // don't take anything
    lookup[0] = 1;
    // Process for remaining amount values
    for (let coin of coins) {
        for (let i = 1; i <= amount; i++) {
            if (coin <= i) {
                lookup[i] += lookup[i - coin];
            }
        }
    }
    return lookup[amount];
};

module.exports = change;