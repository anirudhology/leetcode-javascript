
var DetectSquares = function () {
    this.coordinates = [];
    this.frequencies = new Map();
};

DetectSquares.prototype.add = function (point) {
    this.coordinates.push(point);
    const key = point[0] + "," + point[1];
    if (this.frequencies.has(key)) {
        this.frequencies.set(key, this.frequencies.get(key) + 1);
    } else {
        this.frequencies.set(key, 1);
    }
};

DetectSquares.prototype.count = function (point) {
    const x = point[0];
    const y = point[1];
    let result = 0;
    for (const coordinate of this.coordinates) {
        const px = coordinate[0];
        const py = coordinate[1];
        if (Math.abs(px - x) === Math.abs(py - y) && px !== x && py !== y) {
            let count = 1;
            const key1 = x + "," + py;
            const key2 = px + "," + y;
            if (this.frequencies.has(key1)) {
                count *= this.frequencies.get(key1);
            } else {
                count = 0;
            }
            if (this.frequencies.has(key2)) {
                count *= this.frequencies.get(key2);
            } else {
                count = 0;
            }
            result += count;
        }
    }
    return result;
};

module.exports = DetectSquares;