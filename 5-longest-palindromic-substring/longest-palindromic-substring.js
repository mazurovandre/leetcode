/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s === '') return s;

    let result = '';

    for (let i = 0; i < s.length; i++) {
        const res1 = expandAroundCenter(s, i, i);
        const res2 = expandAroundCenter(s, i, i + 1);

        const longest = res1.length > res2.length ? res1 : res2;

        if (longest.length > result.length) {
            result = longest;
        }
    }

    return result;
};

var expandAroundCenter = function(s, left, right) {
    while(left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }

    return s.slice(left + 1, right);
}