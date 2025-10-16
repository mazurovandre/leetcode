/**
 * @param {number[]} nums
 * @param {number} value
 * @return {number}
 */
var findSmallestInteger = function(nums, value) {
    const map = new Array(value).fill(0);
    let mex = 0;

    nums.forEach(num => {
        const localValue = ((num % value) + value) % value;

        map[localValue]++;
    });

    while (map[mex % value] > 0) {
        map[mex % value]--;
        mex++;
    }

    return mex;
};