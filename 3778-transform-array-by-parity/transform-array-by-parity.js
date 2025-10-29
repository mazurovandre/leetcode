/**
 * @param {number[]} nums
 * @return {number[]}
 */
const transformArray = nums => nums.map(num => num % 2).sort();