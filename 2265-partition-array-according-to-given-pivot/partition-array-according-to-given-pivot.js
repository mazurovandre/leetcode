/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    const prev = [];
    const equal = [];
    const post = [];

    for (const num of nums) {
        if (num < pivot) {
            prev.push(num);
        } else if (num === pivot) {
            equal.push(num);
        } else {
            post.push(num);
        }
    }

    return [...prev, ...equal, ...post];
};