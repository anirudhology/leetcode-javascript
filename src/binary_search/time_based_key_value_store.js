const TimeMap = function () {
    this.entries = new Map();
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
    if (!this.entries.has(key)) {
        this.entries.set(key, { values: [], timestamps: [] });
    }
    const node = this.entries.get(key);
    node.values.push(value);
    node.timestamps.push(timestamp);
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
    if (!this.entries.has(key)) {
        return "";
    }
    // Get all values and timestamps for the key
    const node = this.entries.get(key);
    const { timestamps, values } = node;
    // Left and right pointers for binary search
    let left = 0;
    let right = timestamps.length - 1;
    // Final result
    let result = "";
    // Process the array from both ends
    while (left <= right) {
        const middle = left + Math.floor((right - left) / 2);
        if (timestamps[middle] <= timestamp) {
            result = values[middle];
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    return result;
};

module.exports = TimeMap;