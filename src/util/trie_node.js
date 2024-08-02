function TrieNode(content) {
    this.content === undefined ? null : content;
    this.children = new Array(26).fill(null);
    this.isWord = false;
};

module.exports = TrieNode;