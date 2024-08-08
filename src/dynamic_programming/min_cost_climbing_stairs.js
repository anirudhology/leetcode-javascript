const minCostClimbingStairs = cost => {
    // Total number of stairs
    const n = cost.length;
    // Variables to keep track of cost of climbing one or two stairs
    let a = cost[0];
    let b = cost[1];
    if (n === 2) {
        return Math.min(a, b);
    }
    for (let i = 2; i < n; i++) {
        const c = Math.min(a, b) + cost[i];
        a = b;
        b = c;
    }
    return Math.min(a, b);
};

module.exports = minCostClimbingStairs;