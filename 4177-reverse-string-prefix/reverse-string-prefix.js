/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reversePrefix = function(s, k) {
    let pref = '';

    for (let i = 0; i < k; i++) {
        pref = s[i] + pref;
    }

    return pref + s.slice(k);
};