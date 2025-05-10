/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1 || s.length < numRows) return s;

    const rows = new Array(numRows).fill('');

    let isGoingDown = true;
    let currentRow = 0;

    for (const char of s) {
        rows[currentRow] += char;
        
        if (currentRow === 0) {
            isGoingDown = true
        }
        if (currentRow === numRows - 1) {
            isGoingDown = false;
        }

        currentRow = isGoingDown ? currentRow + 1 : currentRow - 1;
    }

    return rows.join('');
};