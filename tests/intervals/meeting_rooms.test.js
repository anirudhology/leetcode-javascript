const canAttendMeetings = require('../../src/intervals/meeting_rooms');

test('can attend all meetings - no overlapping intervals', () => {
    const intervals = [[0, 30], [35, 50], [60, 75]];
    expect(canAttendMeetings(intervals)).toBe(true);
});

test('cannot attend all meetings - overlapping intervals', () => {
    const intervals = [[0, 30], [20, 50], [60, 75]];
    expect(canAttendMeetings(intervals)).toBe(false);
});

test('can attend all meetings - empty array', () => {
    const intervals = [];
    expect(canAttendMeetings(intervals)).toBe(true);
});

test('can attend all meetings - single interval', () => {
    const intervals = [[10, 20]];
    expect(canAttendMeetings(intervals)).toBe(true);
});

test('can attend all meetings - continuous non-overlapping intervals', () => {
    const intervals = [[0, 10], [10, 20], [20, 30]];
    expect(canAttendMeetings(intervals)).toBe(true);
});
