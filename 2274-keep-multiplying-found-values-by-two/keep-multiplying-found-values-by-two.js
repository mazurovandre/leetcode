/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    const map = new Map();

    for (const num of nums) {
        map.set(num, true);
    }

    while (map.has(original)) {
        original *= 2;
    }
    
    return original;
};