const MedianFinder = require('../../src/heap/find_median_from_data_stream');

test('test addNum and findMedian', () => {
    const finder = new MedianFinder();

    finder.addNum(1);
    expect(finder.findMedian()).toBe(1.0);

    finder.addNum(2);
    expect(finder.findMedian()).toBe(1.5);

    finder.addNum(3);
    expect(finder.findMedian()).toBe(2.0);

    finder.addNum(4);
    expect(finder.findMedian()).toBe(2.5);

    finder.addNum(5);
    expect(finder.findMedian()).toBe(3.0);
});

test('test single element', () => {
    const finder = new MedianFinder();

    finder.addNum(10);
    expect(finder.findMedian()).toBe(10.0);
});
