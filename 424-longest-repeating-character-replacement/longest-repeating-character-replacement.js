/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let result = 0;
    const charMap = new Map();
    let left = 0;
    let maxFreq = 0;

    for (let right = 0; right < s.length; right++) {
        const charCount = (charMap.get(s[right]) || 0) + 1;
        charMap.set(s[right], charCount);
        maxFreq = Math.max(maxFreq, charCount);

        while ((right - left + 1) - maxFreq > k) {
            charMap.set(s[left], charMap.get(s[left]) - 1);
            left++;
        }

        result = Math.max(result, right - left + 1);
    }

    return result;
};