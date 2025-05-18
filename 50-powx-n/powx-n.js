/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n === 0 || x === 1) return 1;

    let result = 1;
    let base = x;
    let exp = Math.abs(n);

    while (exp > 0) {
        if (exp % 2 === 1) {
            result *= base;
        }

        base *= base;
        exp = Math.floor(exp / 2);
    }

    return n > 0 ? result : 1 / result;
};