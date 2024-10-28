/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let top = 0;
    let bottom = matrix.length - 1;

    while (top <= bottom) {
        const middle = Math.floor((bottom + top) / 2);
        const middleStart = matrix[middle][0];
        const middleEnd = matrix[middle][matrix[middle].length - 1];

        if (target > middleEnd) {
            top = middle + 1;
        } else if (target < middleStart) {
            bottom = middle - 1;
        } else {
            let left = 0;
            let right = matrix[middle].length - 1;

            while (left <= right) {
                const center = Math.floor((right + left) / 2);
                const centerValue = matrix[middle][center];

                if (centerValue < target) {
                    left = center + 1;
                } else if (centerValue > target) {
                    right = center - 1;
                } else {
                    return true;
                }
            }
            
            break;
        }
    }

    return false;
};