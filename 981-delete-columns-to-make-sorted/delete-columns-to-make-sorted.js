/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    let result = 0;

    for (let i = 0; i < strs[0].length; i++) {
        let column = '';

        for (let j = 0; j < strs.length; j++) {
            column += strs[j][i];
        }

        const sorted = column.split('').sort().join('');

        if (column !== sorted) {
            result++;
        }
    }

    return result;
};