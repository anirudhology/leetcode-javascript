const canAttendMeetings = intervals => {
    // Sort the intervals by their start time
    intervals.sort((a, b) => a[0] - b[0]);
    // Process all intervals
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i - 1][1] > intervals[i][0]) {
            return false;
        }
    }
    return true;
};

module.exports = canAttendMeetings;