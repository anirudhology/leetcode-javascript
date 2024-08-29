const canCompleteCircuit = (gas, cost) => {
    // Effective fuel for the current index
    let localFuel = 0;
    // Global effective fuel after the journey
    let globalFuel = 0;
    // Starting index of the journey
    let index = 0;
    // Process the array
    for (let i = 0; i < gas.length; i++) {
        localFuel += gas[i] - cost[i];
        globalFuel += gas[i] - cost[i];
        if (localFuel < 0) {
            localFuel = 0;
            index = i + 1;
        }
    }
    return globalFuel >= 0 ? index : -1;
};

module.exports = canCompleteCircuit;