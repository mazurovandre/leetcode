/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;

    while (left <= right) {
        while (s[left] && !s[left].match(/[a-z0-9]/i)) {
            left++;
        }
        while (s[right] && !s[right].match(/[a-z0-9]/i)) {
            right--;
        }
        if (s[left] && s[right] && s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        left++;
        right--;
    }

    return true;
};