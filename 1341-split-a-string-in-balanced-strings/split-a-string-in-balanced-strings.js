/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let result = 0;
    let count = 0;

    for (const char of s) {
        if (char === 'L') {
            count++;
        } else {
            count--;
        }

        if (count === 0) {
            result++;
            count = 0;
        }
    }

    return result;
};