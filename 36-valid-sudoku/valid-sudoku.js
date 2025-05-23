/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const rowSet = Array.from({ length: 9 }, () => new Set());
    const colSet = Array.from({ length: 9 }, () => new Set());
    const boxSet = Array.from({ length: 9 }, () => new Set());

    for (let row = 0; row < board.length; row++) {
        for (let column = 0; column < board.length; column++) {
            const value = board[row][column];

            if (value === '.') {
                continue;
            }

            const boxIndex = Math.floor(row / 3) * 3 + Math.floor(column / 3);

            if (rowSet[row].has(value) || colSet[column].has(value) || boxSet[boxIndex].has(value)) {
                return false;
            }

            rowSet[row].add(value);
            colSet[column].add(value);
            boxSet[boxIndex].add(value);
        }
    }

    return true;
};