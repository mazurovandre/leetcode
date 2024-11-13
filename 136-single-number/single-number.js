/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const map = new Map();
    let result = 0;

    for (const num of nums) {
        if (map.has(num)) {
            result = result - num;
        } else {
            map.set(num, true);
            result = result + num;
        }
    }

    return result;
};