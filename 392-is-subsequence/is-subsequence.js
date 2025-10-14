/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let matchCount = 0;

    for (const char of t) {
        if (char === s[matchCount]) {
            matchCount++;
        }
    }

    return matchCount === s.length;
};