const MinStack = require("../../src/stack/min_stack");

describe('MinStack', () => {
    let minStack;

    beforeEach(() => {
        minStack = new MinStack();
    });

    it('should push and return the top element', () => {
        minStack.push(1);
        expect(minStack.top()).toBe(1);

        minStack.push(2);
        expect(minStack.top()).toBe(2);

        minStack.push(-1);
        expect(minStack.top()).toBe(-1);
    });

    it('should pop and return the top element', () => {
        minStack.push(1);
        minStack.push(2);
        minStack.push(3);

        minStack.pop();
        expect(minStack.top()).toBe(2);

        minStack.pop();
        expect(minStack.top()).toBe(1);
    });

    it('should return the minimum element', () => {
        minStack.push(1);
        expect(minStack.getMin()).toBe(1);

        minStack.push(2);
        expect(minStack.getMin()).toBe(1);

        minStack.push(-1);
        expect(minStack.getMin()).toBe(-1);

        minStack.pop();
        expect(minStack.getMin()).toBe(1);
    });

    it('should handle mixed operations', () => {
        minStack.push(3);
        minStack.push(5);
        expect(minStack.getMin()).toBe(3);

        minStack.push(2);
        minStack.push(1);
        expect(minStack.getMin()).toBe(1);

        minStack.pop();
        expect(minStack.getMin()).toBe(2);

        minStack.pop();
        expect(minStack.getMin()).toBe(3);

        expect(minStack.top()).toBe(5);
    });
});