/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function(grid) {
    let islands = 0;

    const dfs = (r, c) => {
        if (r < 0 || c < 0 || r >= grid.length || c >= grid[0].length || grid[r][c] === '0') return;

        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

        grid[r][c] = '0';
        for (const [dr, dc] of directions) {
            dfs(r + dr, c + dc);
        }
    }

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[r].length; c++) {
            if (grid[r][c] === '1') {
                dfs(r, c);
                islands++;
            }
        }
    }

    return islands;
};