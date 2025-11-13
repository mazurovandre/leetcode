/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function(s, t) {
    const map = {};
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        map[s[i]] = i;
    }

    for (let i = 0; i < t.length; i++) {
        result += Math.abs(map[t[i]] - i);
    }

    return result;
};