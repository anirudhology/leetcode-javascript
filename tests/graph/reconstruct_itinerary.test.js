const findItinerary = require('../../src/graph/reconstruct_itinerary');

test('ReconstructItinerary.findItinerary', () => {
    // Test case 1
    let tickets1 = [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]];
    let expected1 = ["JFK", "MUC", "LHR", "SFO", "SJC"];
    expect(findItinerary(tickets1)).toEqual(expected1);

    // Test case 2
    let tickets2 = [["JFK", "SFO"], ["JFK", "ATL"], ["SFO", "ATL"], ["ATL", "JFK"], ["ATL", "SFO"]];
    let expected2 = ["JFK", "ATL", "JFK", "SFO", "ATL", "SFO"];
    expect(findItinerary(tickets2)).toEqual(expected2);
});