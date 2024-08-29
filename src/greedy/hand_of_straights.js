const isNStraightHand = (hand, groupSize) => {
    if (hand.length % groupSize !== 0) return false; // Quick check to avoid unnecessary work

    // Count the occurrences of each card
    const countMap = new Map();
    for (let card of hand) {
        countMap.set(card, (countMap.get(card) || 0) + 1);
    }

    // Sort the hand array
    hand.sort((a, b) => a - b);

    // Try to form groups
    for (let card of hand) {
        if (countMap.get(card) > 0) { // If the current card is still available
            // Form a group starting with 'card'
            for (let i = 0; i < groupSize; i++) {
                const currentCard = card + i;
                if (countMap.get(currentCard) > 0) {
                    // Decrement the count of the current card
                    countMap.set(currentCard, countMap.get(currentCard) - 1);
                } else {
                    // If a card needed to complete the group is missing, return false
                    return false;
                }
            }
        }
    }
    return true;
};

module.exports = isNStraightHand;