/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if (rowIndex === 0) return [1];
    if (rowIndex === 1) return [1, 1];

    const prevRow = getRow(rowIndex - 1);
    const arr = Array(rowIndex + 1).fill(1);

    for (let i = 1; i < arr.length - 1; i++) {
        const left = prevRow[i - 1];
        const right = prevRow[i];

        arr[i] = left + right;
    }

    return arr;
};