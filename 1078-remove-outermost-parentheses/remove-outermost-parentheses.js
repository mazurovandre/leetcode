/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    const symbols = [];
    let result = '';

    for (const char of s) {
        if (char === '(') {
            if (symbols.length) {
                result += char;
            }

            symbols.push(char);
        } else {
            symbols.pop();

            if (symbols.length) {
                result += char;
            }
        }
        
    }

    return result;
};