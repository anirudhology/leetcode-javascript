const minMeetingRooms = require('../../src/intervals/meeting_rooms_ii');

test('calculates the minimum number of meeting rooms needed', () => {
    // Test case: Overlapping intervals
    const intervals1 = [[0, 30], [5, 10], [15, 20]];
    expect(minMeetingRooms(intervals1)).toBe(2);

    // Test case: Non-overlapping intervals
    const intervals2 = [[7, 10], [2, 4]];
    expect(minMeetingRooms(intervals2)).toBe(1);

    // Test case: Single interval
    const intervals3 = [[1, 5]];
    expect(minMeetingRooms(intervals3)).toBe(1);

    // Test case: Empty intervals array
    const intervals4 = [];
    expect(minMeetingRooms(intervals4)).toBe(0);

    // Test case: Null intervals array
    const intervals5 = null;
    expect(minMeetingRooms(intervals5)).toBe(0);

    // Test case: Multiple meetings at the same time
    const intervals6 = [[1, 10], [1, 10], [1, 10]];
    expect(minMeetingRooms(intervals6)).toBe(3);
});