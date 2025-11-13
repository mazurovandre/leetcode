/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function(s, t) {
    const countS = {};
    const countT = {};
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        countS[s[i]] = i;
    }

    for (let i = 0; i < t.length; i++) {
        countT[t[i]] = i;
    }

    for (const char of s) {
        result += Math.abs(countS[char] - countT[char]);
    }

    return result;
};