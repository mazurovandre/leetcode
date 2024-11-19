/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    const inCounts = new Array(n + 1).fill(0);
    const outCounts = new Array(n + 1).fill(0);

    for (const relate of trust) {
        outCounts[relate[0]]++;
        inCounts[relate[1]]++;
    }

    for (let i = 1; i <= n; i++) {
        if (inCounts[i] === n - 1 && outCounts[i] === 0) {
            return i;
        }
    }

    return -1;
};