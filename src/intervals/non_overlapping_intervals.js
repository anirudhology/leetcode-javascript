const eraseOverlapIntervals = intervals => {
    // Special case
    if (intervals === null || intervals.length === 0) {
        return 0;
    }
    // Sort the array by their end times
    intervals.sort((a, b) => a[1] - b[1]);
    // Current end time
    let currentEnd = intervals[0][1];
    // Non-overlapping intervals
    let nonOverlappingIntervals = 1;
    // Process remaining intervals
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] >= currentEnd) {
            currentEnd = intervals[i][1];
            nonOverlappingIntervals++;
        }
    }
    return intervals.length - nonOverlappingIntervals;
};

module.exports = eraseOverlapIntervals;