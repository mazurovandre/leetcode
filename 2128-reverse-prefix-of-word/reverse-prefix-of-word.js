/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    const letters = [];

    for (let i = 0; i < word.length; i++) {
        letters.unshift(word[i]);

        if (word[i] === ch) {
            return letters.join('') + word.slice(i + 1);
        }
    }

    return word;
};