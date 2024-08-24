const missingNumber = nums => {
    const n = nums.length;
    let sum = 0;
    for (let num of nums) {
        sum += num;
    }
    return (n * (n + 1) / 2) - sum;
};

module.exports = missingNumber;