/**
 * @param {number} n
 * @return {number}
 */
var smallestNumber = function(n) {
    for (let i = n; i < n * 2; i++) {
        const bin = i.toString(2).split('').filter(item => item !== '1');

        if (bin.length === 0) {
            return i;
        }
    }
    return n;
};