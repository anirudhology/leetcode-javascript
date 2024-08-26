const ladderLength = (beginWord, endWord, wordList) => {
    // Convert list to set for O(1) search
    const words = new Set(wordList);
    // Check if endWord is not present in the words
    if (!words.has(endWord)) {
        return 0;
    }
    // Initialize a queue for BFS with the beginWord
    const nodes = [beginWord];
    let level = 1;  // Start at level 1
    // Perform BFS
    while (nodes.length > 0) {
        const size = nodes.length;  // Number of nodes at current level
        level++;  // Increment level
        // Process all nodes at the current level
        for (let i = 0; i < size; i++) {
            const currentWord = nodes.shift();  // Dequeue the next word
            // Try all possible one-letter transformations
            for (let j = 0; j < currentWord.length; j++) {
                for (let c = 0; c < 26; c++) {
                    const newWord = currentWord.slice(0, j) + String.fromCharCode(97 + c) + currentWord.slice(j + 1);
                    if (newWord === endWord) {
                        return level;  // If we find the endWord, return the level count
                    }
                    if (words.has(newWord)) {
                        nodes.push(newWord);  // Add new valid word to queue
                        words.delete(newWord);  // Remove from set to avoid reprocessing
                    }
                }
            }
        }
    }
    return 0;  // Return 0 if no path is found
};

module.exports = ladderLength;