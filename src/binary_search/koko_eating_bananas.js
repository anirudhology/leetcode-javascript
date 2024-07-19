/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
const kokoEatingBananas = (piles, h) => {
    // Special case
    if (piles === undefined || piles.length == 0 || h <= 0) {
        return 0;
    }
    // Koko can eat minimum one banana and maximum "the greatest number
    // in the array" bananas
    let left = 1;
    let right = Math.max(...piles);
    // Minimum rate of eating bananas
    let minRate = 0;
    // Process the array between the range
    while (left <= right) {
        const currentRate = left + Math.ceil((right - left) / 2);
        let timeTaken = 0;
        for (let pile of piles) {
            timeTaken += Math.ceil(pile / currentRate);
        }
        if (timeTaken <= h) {
            minRate = currentRate;
            right = currentRate - 1;
        } else {
            left = currentRate + 1;
        }
    }
    return minRate;
};

module.exports = kokoEatingBananas;