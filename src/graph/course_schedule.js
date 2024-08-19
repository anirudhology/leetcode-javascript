const canFinish = (numCourses, prerequisites) => {
    // Adjacency list for the graph
    const adjacencyList = new Array(numCourses).fill(null).map(() => []);
    // Array to store indegrees of every node
    const indegrees = new Array(numCourses).fill(0);
    // Populate both adjacencyList and indegrees
    for (let prerequisite of prerequisites) {
        adjacencyList[prerequisite[1]].push(prerequisite[0]);
        indegrees[prerequisite[0]]++;
    }
    // Queue to store nodes with zero indegree
    const zeroIndegreeNodes = [];
    for (let i = 0; i < numCourses; i++) {
        if (indegrees[i] === 0) {
            zeroIndegreeNodes.push(i);
        }
    }
    // Count to store the courses one can take
    let count = 0;
    // Process all zero indegree nodes
    while (zeroIndegreeNodes.length > 0) {
        const node = zeroIndegreeNodes.pop();
        count++;
        for (const neighbor of adjacencyList[node]) {
            indegrees[neighbor]--;
            if (indegrees[neighbor] === 0) {
                zeroIndegreeNodes.push(neighbor);
            }
        }
    }
    return count === numCourses;
};

module.exports = canFinish;