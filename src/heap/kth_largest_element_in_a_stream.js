var KthLargest = function (k, nums) {
    this.minHeap = [];
    this.capacity = k;
    nums.forEach(num => this.add(num));
};

KthLargest.prototype.add = function (val) {
    if (this.minHeap.length < this.capacity) {
        this.minHeap.push(val);
    } else if (val > this.minHeap[0]) {
        this.minHeap.shift();
        this.minHeap.push(val);
    }
    this.minHeap.sort((a, b) => a - b);
    return this.minHeap[0];
};

module.exports = KthLargest;