/**
 * @param {number} k
 * @return {number}
 */
var smallestRepunitDivByK = function(k) {
    if (k % 2 === 0) return -1;
    let result = 1;
    let ones = '1';

    for (let i = 1; i <= k; i++) {
        const rest = +ones % k;

        if (!rest) return result;
        ones = String(rest) + '1';
        result++;
    }

    return -1;
};