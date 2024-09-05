const foreignDictionary = words => {
    // Total number of words
    const n = words.length;
    // Directed graph of character.
    const graph = Array.from({ length: 26 }, () => new Array(26).fill(false));
    // Array to represent characters in the language
    const characters = new Array(26).fill(false);
    // Count of unique letters in the language
    let uniqueLetterCount = 0;
    // Process every word
    for (const word of words) {
        for (let i = 0; i < word.length; i++) {
            if (uniqueLetterCount === 26) {
                break;
            }
            const index = word[i].charCodeAt(0) - 'a'.charCodeAt(0);
            if (!characters[index]) {
                characters[index] = true;
                uniqueLetterCount++;
            }
        }
    }
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < words[i].length; j++) {
            // If next word is a prefix of current word, we have
            // invalid order
            if (j >= words[i + 1].length) {
                return "";
            }
            // Compare characters of two words
            const current = words[i].charAt(j);
            const next = words[i + 1].charAt(j);
            // If both characters are same, no information regarding their
            // order is extracted
            if (current === next) {
                continue;
            }
            // If there is already a directed graph between next and current,
            // it means cycle exists
            if (graph[next.charCodeAt(0) - 'a'.charCodeAt(0)][current.charCodeAt(0) - 'a'.charCodeAt(0)]) {
                return "";
            }
            // Else, establish an edge between current and next
            graph[current.charCodeAt(0) - 'a'.charCodeAt(0)][next.charCodeAt(0) - 'a'.charCodeAt(0)] = true;
            break;
        }
    }
    // Now, the graph is created, we will now start the process of
    // topological sorting

    // 1. Find indegrees of every node
    const indegrees = new Array(26).fill(0);
    for (let i = 0; i < 26; i++) {
        for (let j = 0; j < 26; j++) {
            if (i !== j && characters[i] && characters[j] && graph[i][j]) {
                indegrees[j]++;
            }
        }
    }
    // 2. Queue to store nodes with zero indegrees
    const zeroIndegreeNodes = [];
    for (let i = 0; i < 26; i++) {
        if (characters[i] && indegrees[i] === 0) {
            zeroIndegreeNodes.push(i);
        }
    }
    // 3. Perform topological sort
    let order = "";
    while (zeroIndegreeNodes.length > 0) {
        const current = zeroIndegreeNodes.shift();
        order += String.fromCharCode(current + 'a'.charCodeAt(0));
        for (let i = 0; i < 26; i++) {
            if (i != current && characters[i] && graph[current][i]) {
                indegrees[i]--;
                if (indegrees[i] == 0) {
                    zeroIndegreeNodes.push(i);
                }
            }
        }
    }
    return order.length < uniqueLetterCount ? "" : order.toString();
};

module.exports = foreignDictionary;
