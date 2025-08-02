/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    const arr = Array(rowIndex + 1).fill(1);

    if (rowIndex === 0) return arr;

    const prevRow = getRow(rowIndex - 1);

    for (let i = 1; i < arr.length - 1; i++) {
        arr[i] = prevRow[i - 1] + prevRow[i];
    }

    return arr;
};