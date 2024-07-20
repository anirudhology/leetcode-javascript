/**
 * @param {number[]} prices
 * @return {number}
 */
const bestTimeToBiyAndSellStocks = prices => {
    // Special case
    if (prices === undefined || prices.length === 0) {
        return 0;
    }
    // Maximum profit so far
    let maxProfit = 0;
    // Minimum price so far
    let minPrice = prices[0];
    // Process the array
    for (let price of prices) {
        maxProfit = Math.max(maxProfit, price - minPrice);
        minPrice = Math.min(minPrice, price);
    }
    return maxProfit;
};

module.exports = bestTimeToBiyAndSellStocks