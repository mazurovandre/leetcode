/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function(n) {
    for (i = 2; i <= n - 2; i++) {
        const val = n.toString(i);
        const lav = val.split('').reverse().join('');

        if (val !== lav) {
            return false;
        }
    }

    return true;
};