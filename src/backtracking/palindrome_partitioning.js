const partition = s => {
    // List to store the final partitions
    const partitions = [];
    if (s === null || s.length === 0) {
        return partitions;
    }
    // Perform backtracking
    backtrack(s, 0, [], partitions);
    return partitions;
};

const backtrack = (s, index, current, partitions) => {
    // Base case
    if (index === s.length) {
        partitions.push([...current]);
        return;
    }
    for (let i = index; i < s.length; i++) {
        if (isPalindrome(s, index, i)) {
            current.push(s.substring(index, i + 1));
            backtrack(s, i + 1, current, partitions);
            current.pop();
        }
    }
};

const isPalindrome = (s, left, right) => {
    while (left <= right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};

module.exports = partition;