/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;

    const leftDict = {};
    const rightDict = {};

    for (let i = 0; i < s.length; i++) {
        const leftDictValue = leftDict[s[i]];
        const rightDictValue = rightDict[t[i]];

        if (!leftDictValue) {
            leftDict[s[i]] = t[i];
        }

        if (!rightDictValue) {
            rightDict[t[i]] = s[i];
        }

        if (leftDictValue && leftDictValue !== t[i] || rightDictValue &&rightDictValue !== s[i]) {
            return false;
        }
    }

    return true;
};