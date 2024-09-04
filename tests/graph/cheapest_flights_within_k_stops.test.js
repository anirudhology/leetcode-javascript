const findCheapestPrice = require('../../src/graph/cheapest_flights_within_k_stops');

test('Basic Scenario', () => {
    const n = 3;
    const flights = [[0, 1, 100], [1, 2, 100], [0, 2, 500]];
    const src = 0;
    const dst = 2;
    const k = 1;
    const result = findCheapestPrice(n, flights, src, dst, k);
    expect(result).toBe(200);
});

test('No Available Flight', () => {
    const n = 3;
    const flights = [[0, 1, 100]];
    const src = 0;
    const dst = 2;
    const k = 1;
    const result = findCheapestPrice(n, flights, src, dst, k);
    expect(result).toBe(-1);
});

test('Direct Flight', () => {
    const n = 3;
    const flights = [[0, 2, 300]];
    const src = 0;
    const dst = 2;
    const k = 1;
    const result = findCheapestPrice(n, flights, src, dst, k);
    expect(result).toBe(300);
});

test('No Stop Allowed', () => {
    const n = 3;
    const flights = [[0, 1, 100], [1, 2, 100], [0, 2, 500]];
    const src = 0;
    const dst = 2;
    const k = 0;
    const result = findCheapestPrice(n, flights, src, dst, k);
    expect(result).toBe(500);
});

test('Large K Value', () => {
    const n = 4;
    const flights = [[0, 1, 100], [1, 2, 100], [2, 3, 100], [0, 3, 500]];
    const src = 0;
    const dst = 3;
    const k = 2;
    const result = findCheapestPrice(n, flights, src, dst, k);
    expect(result).toBe(300);
});
