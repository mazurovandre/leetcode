/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    const count = {};
    const vowels = 'aeiou'.split('');
    let vowelsMax = 0;
    let consonMax = 0;

    for (const char of s) {
        if (count[char]) {
            count[char] = count[char] + 1;
        } else {
            count[char] = 1;
        }
    }

    Object.entries(count).forEach(([char, value]) => {
        const isVowel = vowels.includes(char);

        if (isVowel) {
            vowelsMax = Math.max(vowelsMax, value);
        } else {
            consonMax = Math.max(consonMax, value);
        }
    });

    return consonMax + vowelsMax;
};