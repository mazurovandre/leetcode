/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const first = "qwertyuiop";
    const second = "asdfghjkl";
    const third = "zxcvbnm";

    const detectRow = (letter) => {
        if (first.includes(letter)) {
            return 1;
        }
        if (second.includes(letter)) {
            return 2;
        }
        if (third.includes(letter)) {
            return 3;
        }

        return -1;
    }

    return words.filter(word => {
        let result = -1;
        for (let i = 0; i < word.length; i++) {
            if (i === 0) {
                result = detectRow(word[i].toLowerCase());
            } else {
                value = detectRow(word[i].toLowerCase());
                
                if (result !== value) {
                    return false;
                }
            }
        }
        return true;
    })
};