/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function(n) {
    let result = 0;

    for (let a = 1; a <= n; a++) {
        for (let b = 1; b <= n; b++) {
            for (let c = 1; c <= n; c++) {
                if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)) {
                    result++;
                }
            }
        }
    }

    return result;
};