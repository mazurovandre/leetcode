/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const hash = {};

    for (const num of nums) {
        if (!hash[num]) {
            hash[num] = 0;
        }

        hash[num] += 1;
    }

    const most = Object.entries(hash)
        .sort(([_, aVal], [_1, bVal]) => bVal - aVal)
        .map(([key]) => +key);

    return most.slice(0, k);
};