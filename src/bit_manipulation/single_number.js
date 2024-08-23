const singleNumber = nums => {
    let answer = nums[0];
    for (let i = 1; i < nums.length; i++) {
        answer ^= nums[i];
    }
    return answer;
};

module.exports = singleNumber;