/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findXSum = function(nums, k, x) {
    const result = [];

    const xSum = (subArr) => {
        const map = {};

        for (const num of subArr) {
            if (map[num]) {
                map[num] = map[num] + 1;
            } else {
                map[num] = 1;
            }
        }

        const sorted = Object.entries(map).sort((a, b) => {
            if (a[1] === b[1]) {
                return b[0] - a[0];
            }
            return b[1] - a[1];
        }).slice(0, x);

        return sorted.reduce((acc, item) => acc + (+item[0] * item[1]), 0);
    }

    for (let i = 0; (i + k) <= nums.length; i++) {
        const sum = xSum(nums.slice(i, i + k));
        result.push(sum);
    }

    return result;
};