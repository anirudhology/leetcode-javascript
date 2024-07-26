function ListNodeWithRandom(val, next, random) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.random = random === undefined ? null : next;
}

module.exports = ListNodeWithRandom;