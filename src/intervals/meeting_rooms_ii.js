const minMeetingRooms = intervals => {
    // Special case
    if (intervals === null || intervals.length === 0) {
        return 0;
    }
    // Total number of intervals
    const n = intervals.length;
    // Arrays to store start and end times
    const startTimes = new Array(n).fill(0);
    const endTimes = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        startTimes[i] = intervals[i][0];
        endTimes[i] = intervals[i][1];
    }
    // Sort both arrays
    startTimes.sort((a, b) => a - b);
    endTimes.sort((a, b) => a - b);
    // Required meeting rooms
    let requiredMeetingRooms = 0;
    // Meetings in progress
    let meetingsInProgress = 0;
    // Pointers to track both arrays
    let start = 0;
    let end = 0;
    // Process both arrays
    while (start < n) {
        if (startTimes[start] < endTimes[end]) {
            meetingsInProgress++;
            start++;
        } else {
            meetingsInProgress--;
            end++;
        }
        requiredMeetingRooms = Math.max(requiredMeetingRooms, meetingsInProgress);
    }
    return requiredMeetingRooms;
};

module.exports = minMeetingRooms;