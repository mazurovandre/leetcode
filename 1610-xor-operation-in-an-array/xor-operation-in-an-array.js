/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    const nums = [];

    for (let i = 0; i < n; i++) {
        nums[i] = start + 2 * i;
    }

    return nums.reduce((acc, num) => acc ^ num, 0);
};