const isNStraightHand = require('../../src/greedy/hand_of_straights');

test('isNStraightHand valid test', () => {
    const hand = [1, 2, 3, 6, 2, 3, 4, 7, 8];
    const groupSize = 3;
    expect(isNStraightHand(hand, groupSize)).toBe(true);
});

test('isNStraightHand invalid test', () => {
    const hand = [1, 2, 3, 4, 5];
    const groupSize = 4;
    expect(isNStraightHand(hand, groupSize)).toBe(false);
});

test('isNStraightHand empty hand', () => {
    const hand = [];
    const groupSize = 1;
    expect(isNStraightHand(hand, groupSize)).toBe(true);  // An empty hand should return true
});

test('isNStraightHand single group', () => {
    const hand = [1, 2, 3];
    const groupSize = 3;
    expect(isNStraightHand(hand, groupSize)).toBe(true);
});

test('isNStraightHand group size one', () => {
    const hand = [1, 2, 3, 4];
    const groupSize = 1;
    expect(isNStraightHand(hand, groupSize)).toBe(true);  // Every single card is its own group
});

test('isNStraightHand group size larger than hand', () => {
    const hand = [1, 2, 3];
    const groupSize = 4;
    expect(isNStraightHand(hand, groupSize)).toBe(false);  // Group size cannot be larger than the hand size
});

test('isNStraightHand duplicate cards', () => {
    const hand = [1, 1, 2, 2, 3, 3];
    const groupSize = 3;
    expect(isNStraightHand(hand, groupSize)).toBe(true);  // Duplicate cards should still form groups
});