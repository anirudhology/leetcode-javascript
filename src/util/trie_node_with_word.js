function TrieNodeWithWord() {
    this.word = null;
    this.children = new Array(26).fill(null);
};

module.exports = TrieNodeWithWord;