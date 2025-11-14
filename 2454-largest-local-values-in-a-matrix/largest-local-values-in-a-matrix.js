/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function(grid) {
    const size = grid.length - 2;
    const result = [];

    for (let i = 0; i < size; i++) {
        const row = [];
        for (let j = 0; j < size; j++) {
            let max = 0;

            for (let a = i; a < i + 3; a++) {
                for (let b = j; b < j + 3; b++) {
                    max = Math.max(grid[a][b], max);
                }
            }
            row.push(max);
        }
        result.push(row);
    }

    return result;
};