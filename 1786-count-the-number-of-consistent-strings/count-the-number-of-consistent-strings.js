/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let result = 0;
    const allowedSet = new Set(allowed);

    words.forEach(word => {
        for (const letter of word) {
            if (!allowedSet.has(letter)) {
                return;
            }
        }
        result++;
    });

    return result;
};