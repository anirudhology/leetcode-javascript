const { MinPriorityQueue, MaxPriorityQueue } = require('@datastructures-js/priority-queue');

const MedianFinder = function () {
    this.minHeap = new MinPriorityQueue();
    this.maxHeap = new MaxPriorityQueue();
};

MedianFinder.prototype.addNum = function (num) {
    this.maxHeap.enqueue(num);
    this.minHeap.enqueue(this.maxHeap.dequeue());
    if (this.minHeap.size() > this.maxHeap.size()) {
        this.maxHeap.enqueue(this.minHeap.dequeue());
    }

};

MedianFinder.prototype.findMedian = function () {
    if (this.maxHeap.size() > this.minHeap.size()) {
        return this.maxHeap.front();
    }
    return (this.minHeap.front() + this.maxHeap.front()) / 2.0;
};

module.exports = MedianFinder;