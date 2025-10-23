/**
 * @param {string} s
 * @return {boolean}
 */
var hasSameDigits = function(s) {
    while (s.length > 2) {
        let result = '';
        
        for (let i = 0; i < s.length - 1; i++) {
            result += ((+s[i] + +s[i + 1]) % 10).toString();
        }

        s = result;
    }

    return s[0] === s[1];
};