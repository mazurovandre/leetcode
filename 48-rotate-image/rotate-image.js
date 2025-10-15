/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const size = matrix.length;
    const result = Array(size).fill([]);

    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            result[col] = [matrix[row][col], ...result[col]]
        }
    }

    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            matrix[row][col] = result[row][col]
        }
    }

    return matrix;
};