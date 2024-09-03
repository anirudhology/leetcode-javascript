const findItinerary = tickets => {
    // We need a map that will connect the departure and arrival airports
    const flights = new Map();
    // Array to store the entire path
    const path = [];
    // Populate the map
    for (const [departure, arrival] of tickets) {
        if (!flights.has(departure)) {
            flights.set(departure, []);
        }
        flights.get(departure).push(arrival);
    }
    flights.forEach((arrival) => arrival.sort());

    const dfs = (departureAirPort) => {
        const arrivals = flights.get(departureAirPort) || [];
        while (arrivals.length > 0) {
            dfs(arrivals.shift());
        }
        path.unshift(departureAirPort);
    };

    dfs("JFK");
    return path;
};

module.exports = findItinerary;