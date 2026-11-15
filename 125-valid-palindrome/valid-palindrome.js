/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const formatted = s.toLowerCase().replace(/[^a-z0-9]/g, '');

    let left = 0;
    let right = formatted.length - 1;

    while (left <= right) {
        if (formatted[left] !== formatted[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
};