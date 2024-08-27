const multiply = (num1, num2) => {
    // Special case
    if (num1 === "0" || num2 === "0") {
        return "0";
    }
    // Lengths of both strings
    const m = num1.length;
    const n = num2.length;
    // Array to store the product
    const products = new Array(m + n - 1).fill(0);
    // Process both the strings
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            products[i + j] += (num1[i].charCodeAt(0) - '0'.charCodeAt(0)) * (num2[j].charCodeAt(0) - '0'.charCodeAt(0))
        }
    }
    // Process the products array further
    for (let i = products.length - 1; i > 0; i--) {
        products[i - 1] += Math.floor(products[i] / 10);
        products[i] %= 10;
    }
    // String for final output
    let output = '';
    for (let i of products) {
        output += i;
    }
    return output;
};

module.exports = multiply;