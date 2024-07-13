const twoSum = (numbers, target) => {
    // Special case
    if (numbers === undefined || numbers.length < 2) {
        return null;
    }  
    // Left and right pointers
    let left = 0;
    let right = numbers.length - 1;
    // Array to store final result
    const result = new Array(2).fill(undefined);
    // Process array from both ends
    while (left <= right) {
        const sum = numbers[left] + numbers[right];
        if (sum === target) {
            result[0] = left + 1;
            result[1] = right + 1;
            break;
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return result;
};

module.exports = twoSum;