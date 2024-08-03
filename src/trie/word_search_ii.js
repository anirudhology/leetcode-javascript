const TrieNodeWithWord = require('../../src/util/trie_node_with_word');


const findWords = (board, words) => {
    // List to store final result
    const result = [];
    // Special case
    if (board === null || board.length === 0 || words === null || words.length === 0) {
        return result;
    }
    // Create trie
    const root = createTrie(words);
    // Dimensions of board
    const m = board.length;
    const n = board[0].length;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            dfs(board, i, j, m, n, root, result);
        }
    }
    return result;
};

const createTrie = words => {
    const root = new TrieNodeWithWord();
    for (let word of words) {
        let current = root;
        for (let c of word) {
            if (!current.children[c.charCodeAt(0) - 'a'.charCodeAt(0)]) {
                current.children[c.charCodeAt(0) - 'a'.charCodeAt(0)] = new TrieNodeWithWord();
            }
            current = current.children[c.charCodeAt(0) - 'a'.charCodeAt(0)];
        }
        current.word = word;
    }
    return root;
};

const dfs = (board, i, j, m, n, node, result) => {
    // Handle out of bounds indices
    if (i < 0 || i >= m || j < 0 || j >= n) {
        return;
    }
    const c = board[i][j];
    // If we have already visited this cell
    if (c === '#') {
        return;
    }
    // If there's no child to this node
    if (!node.children[c.charCodeAt(0) - 'a'.charCodeAt(0)]) {
        return;
    }
    node = node.children[c.charCodeAt(0) - 'a'.charCodeAt(0)];
    if (node.word) {
        result.push(node.word);
        node.word = null;
    }
    board[i][j] = '#';
    dfs(board, i - 1, j, m, n, node, result);
    dfs(board, i + 1, j, m, n, node, result);
    dfs(board, i, j - 1, m, n, node, result);
    dfs(board, i, j + 1, m, n, node, result);
    board[i][j] = c;
};

module.exports = findWords;