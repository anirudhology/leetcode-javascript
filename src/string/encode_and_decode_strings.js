/**
 * @param {string[]} strs
 * @returns {string}
 */
const encode = strs => {
    let encoded = '';
    for (const s of strs) {
        const currentEncoded = s.length + "/" + s;
        encoded += currentEncoded;
    }
    return encoded;
}

/**
 * @param {string} str
 * @returns {string[]}
 */
const decode = s => {
    const decoded = [];
    let i = 0;
    while (i < s.length) {
        let j = i;
        while (j < s.length && s[j] !== '/') {
            j++;
        }
        const size = parseInt(s.slice(i, j));
        const word = s.slice(j + 1, j + 1 + size);
        i = j + 1 + size;
        decoded.push(word);
    }
    return decoded;
}

module.exports = {
    encode,
    decode
}