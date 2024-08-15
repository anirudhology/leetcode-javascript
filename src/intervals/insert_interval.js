const insert = (intervals, newInterval) => {
    // Array to store final output
    const result = [];
    // Special case
    if (intervals === null || intervals.length === 0) {
        result.push(newInterval);
        return result;
    }
    // Total number of intervals
    const n = intervals.length;
    // Add all intervals smaller than newInterval
    let index = 0;
    while (index < n && intervals[index][1] < newInterval[0]) {
        result.push(intervals[index]);
        index++;
    }
    // Add new interval and merge, if required
    while (index < n && intervals[index][0] <= newInterval[1]) {
        newInterval = [
            Math.min(intervals[index][0], newInterval[0]),
            Math.max(intervals[index][1], newInterval[1])
        ];
        index++;
    }
    result.push(newInterval);
    // Add remaining elements to the result
    while (index < n) {
        result.push(intervals[index]);
        index++;
    }
    return result;
};

module.exports = insert;