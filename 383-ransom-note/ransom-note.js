/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if (ransomNote.length > magazine.length) return false;

    const map = {};

    magazine.split('').forEach((letter, index) => {
        const noteLetter = ransomNote[index];

        map[letter] = (map[letter] || 0) + 1;

        if (noteLetter) {
            map[noteLetter] = (map[noteLetter] || 0) - 1;
        }
    });

    return !Object.values(map).some(entry => entry < 0)
};