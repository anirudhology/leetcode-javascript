const StackNode = require("../util/stack_node");

function MinStack() {
    // Head of the stack
    this.head = undefined;
}

MinStack.prototype.push = function (val) {
    // If this is the very first node
    if (this.head === undefined) {
        this.head = new StackNode(val, val, undefined);
    }
    // For subsequent nodes
    else {
        this.head = new StackNode(val, Math.min(val, this.head.minValue), this.head);
    }
};

MinStack.prototype.pop = function () {
    if (this.head !== undefined) {
        this.head = this.head.next;
    }
};

MinStack.prototype.top = function () {
    if (this.head !== undefined) {
        return this.head.value;
    }
    throw new Error("Stack is empty");
};

MinStack.prototype.getMin = function () {
    if (this.head !== undefined) {
        return this.head.minValue;
    }
    throw new Error("Stack is empty");
};

module.exports = MinStack;
