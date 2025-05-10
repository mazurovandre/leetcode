/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const seen = new Set();

    while (n !== 1 && !seen.has(n)) {
        const arr = n.toString().split('');

        seen.add(n);
        n = arr.reduce((acc, item) => acc + Math.pow(+item, 2), 0);
    }

    return n === 1;
};