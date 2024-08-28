const maxSubArray = nums => {
    let localMaxima = nums[0];
    let globalMaxima = nums[0];
    for (let i = 1; i < nums.length; i++) {
        localMaxima = Math.max(localMaxima + nums[i], nums[i]);
        globalMaxima = Math.max(globalMaxima, localMaxima);
    }
    return globalMaxima;
};

module.exports = maxSubArray;