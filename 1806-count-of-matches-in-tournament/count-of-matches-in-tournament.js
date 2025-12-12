/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    let result = 0;

    while (n > 1) {
        if (n % 2) {
            const value = (n - 1) / 2 + 1;
            result += Math.floor(n / 2);
            n = value;
        } else {
            const value = n / 2;
            n = value;
            result += value;
        }
    }

    return result;
};