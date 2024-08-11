const cloneGraph = require('../../src/graph/clone_graph');
const GraphNode = require('../../src/util/graph_node');

test('null node', () => {
    expect(cloneGraph(null)).toBeNull();
});

test('single node', () => {
    const node = new GraphNode(1);
    const clone = cloneGraph(node);
    expect(clone).not.toBe(node);
    expect(clone.val).toBe(node.val);
    expect(clone.neighbors).toHaveLength(0);
});

test('graph with one edge', () => {
    const node1 = new GraphNode(1);
    const node2 = new GraphNode(2);
    node1.neighbors.push(node2);
    node2.neighbors.push(node1);

    const clone = cloneGraph(node1);
    expect(clone).not.toBe(node1);
    expect(clone.val).toBe(node1.val);
    expect(clone.neighbors).toHaveLength(1);
    expect(clone.neighbors[0].val).toBe(2);
    expect(clone.neighbors[0]).not.toBe(node1.neighbors[0]);
});

test('graph with cycle', () => {
    const node1 = new GraphNode(1);
    const node2 = new GraphNode(2);
    const node3 = new GraphNode(3);
    node1.neighbors.push(node2);
    node2.neighbors.push(node3);
    node3.neighbors.push(node1);

    const clone = cloneGraph(node1);
    expect(clone).not.toBe(node1);
    expect(clone.val).toBe(node1.val);
    expect(clone.neighbors).toHaveLength(1);
    expect(clone.neighbors[0].val).toBe(2);

    const clone2 = clone.neighbors[0];
    expect(clone2.neighbors[0].val).toBe(3);
    expect(clone2.neighbors[0].neighbors[0].val).toBe(1);
});