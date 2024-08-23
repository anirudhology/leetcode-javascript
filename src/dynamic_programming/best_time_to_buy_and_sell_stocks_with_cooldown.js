const maxProfit = prices => {
    // Special case
    if (!prices) {
        return 0;
    }
    // Total number of stocks
    const n = prices.length;
    // Arrays to store buying and selling prices
    const buy = new Array(n).fill(Number.NEGATIVE_INFINITY);
    const sell = new Array(n).fill(0);
    buy[0] = -prices[0];
    // Process for remaining days
    for (let i = 1; i < n; i++) {
        buy[i] = Math.max(buy[i - 1], i > 1 ? sell[i - 2] - prices[i] : -prices[i]);
        sell[i] = Math.max(sell[i - 1], buy[i - 1] + prices[i]);
    }
    return sell[n - 1];
};

module.exports = maxProfit;