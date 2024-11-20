/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function(matrix) {
    const map = {}
    const result = [];

    for (let i = 0; i < matrix.length; i++) {
        let minRowValue = Infinity;
        let rowIndex = 0;

        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] < minRowValue) {
                minRowValue = matrix[i][j];
                rowIndex = j;
            }
        }

        const columnValues = matrix.map(value => value[rowIndex]);
        const maxValue = Math.max(...columnValues);

        if (minRowValue === maxValue) {
            result.push(maxValue);
        }
    }

    return result;
};