const maxCoins = nums => {
    // Array to store the balloons
    const balloons = new Array(nums.length + 2);
    // Length of the array
    const n = balloons.length;
    balloons[0] = balloons[n - 1] = 1;
    for (let i = 1; i < n - 1; i++) {
        balloons[i] = nums[i - 1];
    }
    // Lookup table
    const lookup = Array.from({ length: n - 1 }, () => new Array(n - 1).fill(-1));
    // Burst balloons between indices 1 and n - 2
    return burst(balloons, 1, n - 2, lookup);
};

const burst = (balloons, i, j, lookup) => {
    // Base case
    if (i > j) {
        return 0;
    }
    // If there is only one balloon
    if (i == j) {
        let temp = balloons[i];
        if (i - 1 >= 0) {
            temp *= balloons[i - 1];
        }
        if (j + 1 < balloons.length) {
            temp *= balloons[j + 1];
        }
        return temp;
    }
    // If we have already calculate this result
    if (lookup[i][j] !== -1) {
        return lookup[i][j];
    }
    // Score
    let score = 0;
    // Burst each balloon after every balloon in the range (i...j) is burst
    for (let k = i; k <= j; k++) {
        let temp = balloons[k];
        if (j + 1 < balloons.length) {
            temp *= balloons[j + 1];
        }
        if (i - 1 >= 0) {
            temp *= balloons[i - 1];
        }
        temp += (burst(balloons, i, k - 1, lookup)) + (burst(balloons, k + 1, j, lookup));
        // Update score, if required
        score = Math.max(score, temp);
    }
    lookup[i][j] = score;
    return score;
};

module.exports = maxCoins;