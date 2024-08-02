const TrieNode = require('../../src/util/trie_node');

const WordDictionary = function () {
    this.root = new TrieNode('');
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
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

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
    return this.searchHelper(word, 0, this.root);
};

WordDictionary.prototype.searchHelper = function (word, index, node) {
    if (index === word.length) {
        return node.isWord;
    }
    if (word[index] === '.') {
        for (const child of node.children) {
            if (child !== null && this.searchHelper(word, index + 1, child)) {
                return true;
            }
        }
    } else {
        return node.children[word[index].charCodeAt(0) - 'a'.charCodeAt(0)] !== null && this.searchHelper(word, index + 1, node.children[word[index].charCodeAt(0) - 'a'.charCodeAt(0)])
    }
    return false;
}

module.exports = WordDictionary;