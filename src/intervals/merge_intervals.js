const merge = intervals => {
    // Special case
    if (intervals === null || intervals.length === 0) {
        return intervals;
    }
    // Sort the intervals by their start time
    intervals.sort((a, b) => a[0] - b[0]);
    // Array to store final output
    const mergedIntervals = [];
    // Current interval
    let currentInterval = intervals[0];
    mergedIntervals.push(currentInterval);
    // Process all intervals
    for (let nextInterval of intervals) {
        const currentEnd = currentInterval[1];
        const nextStart = nextInterval[0];
        const nextEnd = nextInterval[1];
        // If intervals are overlapping
        if (currentEnd >= nextStart) {
            currentInterval[1] = Math.max(currentEnd, nextEnd);
        } else {
            currentInterval = nextInterval;
            mergedIntervals.push(nextInterval);
        }
    }
    return mergedIntervals;
};

module.exports = merge;