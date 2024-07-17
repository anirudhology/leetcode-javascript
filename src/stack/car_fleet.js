/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
const carFleet = (target, position, speed) => {
    // Special case
    if (target < 0 || position === undefined || position.length === 0 || speed === undefined || speed.length === 0) {
        return 0;
    }
    // Total number of cars
    const n = position.length;
    // Array to store the positions and time to target of each car
    const cars = [];
    for (let i = 0; i < n; i++) {
        cars.push([position[i], (target - position[i]) / speed[i]]);
    }
    // Sort this array in descending order
    cars.sort((a, b) => b[0] - a[0]);
    // Last time registered
    let lastTime = 0;
    // Fleet counter
    let fleets = 0;
    // Process for all cars
    for (let i = 0; i < n; i++) {
        if (cars[i][1] > lastTime) {
            fleets++;
            lastTime = cars[i][1];
        }
    }
    return fleets;
};

module.exports = carFleet;