/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    const first = nums1.slice(0, m);
    const second = nums2.slice(0, n);

    nums1.splice(0, nums1.length);

    while (first.length && second.length) {
        nums1.push(first[0] <= second[0] ? first.shift() : second.shift());
    }

    if (first.length) nums1.push(...first);
    if (second.length) nums1.push(...second);
};