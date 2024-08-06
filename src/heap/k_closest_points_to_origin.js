const kClosest = (points, k) => {
    // Array to store k closest elements
    const kClosestElements = [];
    // Special case
    if (points === null || points.length === 0) {
        return kClosestElements;
    }
    // Min heap to store distances of points from origin
    const minHeap = [];
    for (let i = 0; i < points.length; i++) {
        const [x, y] = points[i];
        const distance = x * x + y * y
        minHeap.push([distance, i]);
        minHeap.sort((a, b) => a[0] - b[0]);
    }
    // Get k closest elements
    for (let i = 0; i < k; i++) {
        kClosestElements.push(points[minHeap[i][1]]);
    }
    return kClosestElements;
};

module.exports = kClosest;