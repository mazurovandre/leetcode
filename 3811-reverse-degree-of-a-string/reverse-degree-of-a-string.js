/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
    const abc = 'abcdefghijklmnopqrstuvwxyz';
    const dict = {};
    let result = 0;

    for (let i = 0; i < abc.length; i++) {
        dict[abc[i]] = 26 - i;
    }

    for (let i = 0; i < s.length; i++) {
        result += (i + 1) * dict[s[i]];
    }

    return result;
};