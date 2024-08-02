const TrieNode = require('../../src/util/trie_node');

var Trie = function () {
    this.root = new TrieNode('');
};

Trie.prototype.insert = function (word) {
    // Check if word is already inserted
    if (this.search(word)) {
        return;
    }
    let current = this.root;
    for (let c of word) {
        if (!current.children[c.charCodeAt(0) - 'a'.charCodeAt(0)]) {
            current.children[c.charCodeAt(0) - 'a'.charCodeAt(0)] = new TrieNode(c);
        }
        current = current.children[c.charCodeAt(0) - 'a'.charCodeAt(0)];
    }
    current.isWord = true;
};

Trie.prototype.search = function (word) {
    let current = this.root;
    for (let c of word) {
        if (!current.children[c.charCodeAt(0) - 'a'.charCodeAt(0)]) {
            return false;
        }
        current = current.children[c.charCodeAt(0) - 'a'.charCodeAt(0)];
    }
    return current.isWord;
};

Trie.prototype.startsWith = function (prefix) {
    let current = this.root;
    for (let c of prefix) {
        if (!current.children[c.charCodeAt(0) - 'a'.charCodeAt(0)]) {
            return false;
        }
        current = current.children[c.charCodeAt(0) - 'a'.charCodeAt(0)];
    }
    return true;
};

module.exports = Trie;