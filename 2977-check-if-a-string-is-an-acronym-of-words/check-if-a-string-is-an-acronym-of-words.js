/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    return s === words.reduce((acc, word) => acc + word[0], '');
};