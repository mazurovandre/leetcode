/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits) return [];

    const result = [];
    const dict = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    };

    const backtrack = (combination, nextDigits) => {
        if (!nextDigits) {
            result.push(combination);
            return;
        } else {
            const nextDig = nextDigits[0];
            const letters = dict[nextDig];

            for (const letter of letters) {
                backtrack(combination + letter, nextDigits.slice(1));
            }
        }
    }

    backtrack('', digits);
    return result;
};