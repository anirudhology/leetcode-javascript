const mergeTriplets = (triplets, target) => {
    const validIndices = [];
    for (let i = 0; i < triplets.length; i++) {
        if (triplets[i][0] <= target[0] && triplets[i][1] <= target[1] && triplets[i][2] <= target[2]) {
            validIndices.push(i);
        }
    }
    let isXPresent = false;
    let isYPresent = false;
    let isZPresent = false;
    for (const i of validIndices) {
        if (!isXPresent && triplets[i][0] === target[0]) {
            isXPresent = true;
        }
        if (!isYPresent && triplets[i][1] === target[1]) {
            isYPresent = true;
        }
        if (!isZPresent && triplets[i][2] === target[2]) {
            isZPresent = true;
        }
    }
    return isXPresent && isYPresent && isZPresent;
};

module.exports = mergeTriplets;