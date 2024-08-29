const canCompleteCircuit = require('../../src/greedy/gas_station');

test('canCompleteCircuit basic test', () => {
    const gas = [1, 2, 3, 4, 5];
    const cost = [3, 4, 5, 1, 2];
    expect(canCompleteCircuit(gas, cost)).toBe(3);
});

test('canCompleteCircuit no solution', () => {
    const gas = [2, 3, 4];
    const cost = [3, 4, 5];
    expect(canCompleteCircuit(gas, cost)).toBe(-1);
});

test('canCompleteCircuit single station', () => {
    const gas = [5];
    const cost = [4];
    expect(canCompleteCircuit(gas, cost)).toBe(0);
});

test('canCompleteCircuit all stations equal', () => {
    const gas = [1, 1, 1, 1];
    const cost = [1, 1, 1, 1];
    expect(canCompleteCircuit(gas, cost)).toBe(0);
});

test('canCompleteCircuit multiple solutions', () => {
    const gas = [2, 3, 4];
    const cost = [2, 1, 2];
    expect(canCompleteCircuit(gas, cost)).toBe(0);  // Returns the first valid start
});