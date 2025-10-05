/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const hash = {};

    for (const str of strs) {
        const anagram = str.split('').sort().join('');

        if (!hash[anagram]) {
            hash[anagram] = [];
        }

        hash[anagram].push(str);
    }

    return Object.values(hash);
};