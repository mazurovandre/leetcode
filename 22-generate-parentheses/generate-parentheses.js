/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const generateString = (total, startN, endN, string, res) => {
            if (startN === endN && startN === total) {
                result.push(string);
                return;
            }
            if (startN < total) {
                generateString(total, startN + 1, endN, string + '(', res);
            } 
            if (endN < startN) {
               generateString(total, startN, endN + 1, string + ')', res);
            }
        }

        const result = [];
        generateString(n, 0, 0, '', result);

        return result;
};