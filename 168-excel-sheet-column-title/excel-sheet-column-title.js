/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    const alphabetSize = 26;
    let result = '';

    while (columnNumber) {
        columnNumber--;
        const charCode = 'A'.charCodeAt(0) + (columnNumber % alphabetSize);
        result = String.fromCharCode(charCode) + result;
        columnNumber = Math.floor(columnNumber / alphabetSize);
    }

    return result;
};