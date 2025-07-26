/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const dict = {};
    if (s.length !== t.length) return false;

    for (let i = 0; i < s.length; i++) {
        const first = s[i];
        const second = t[i];

        dict[first] = (dict[first] || 0) + 1;
        dict[second] = (dict[second] || 0) - 1;
    }

    const count = Object.values(dict).filter(num => num !== 0);

    return count.length === 0;
};