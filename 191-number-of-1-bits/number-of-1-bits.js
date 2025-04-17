/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    return n.toString(2).split('').reduce((acc, num) => acc + (num === '1' ? 1 : 0), 0);
};