const isPalindrome = s => {
    // Special case
    if (s === undefined || s.length === 0) {
        return true;
    }
    // Left and right pointers
    let left = 0;
    let right = s.length - 1;
    // Process the array from both ends
    while (left <= right) {
        if (!isAlphanumeric(s.charAt(left))) {
            left++;
            continue;
        }
        if (!isAlphanumeric(s.charAt(right))) {
            right--;
            continue;
        }
        if (s.charAt(left).toLowerCase() != s.charAt(right).toLowerCase()) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};

const isAlphanumeric = c => {
    const asciiCode = c.charCodeAt(0);
    return (asciiCode >= '0'.charCodeAt(0) && asciiCode <= '9'.charCodeAt(0))
        || (asciiCode >= 'a'.charCodeAt(0) && asciiCode <= 'z'.charCodeAt(0))
        || (asciiCode >= 'A'.charCodeAt(0) && asciiCode <= 'Z'.charCodeAt(0))
}

module.exports = isPalindrome;