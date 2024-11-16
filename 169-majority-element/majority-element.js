/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const map = {};

    for (const num of nums) {
        map[num] = map[num] ? map[num] + 1 : 1;
    }

    for (const [num, amount] of Object.entries(map)) {
        if (+amount > nums.length / 2) {
            return +num;
        }
    }

    return 0;
};