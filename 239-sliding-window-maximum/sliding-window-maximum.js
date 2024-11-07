/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const result = new Array(nums.length - k + 1);
    const deque = new Deque();
    let left = 0;
    let right = 0;

    while (right < nums.length) {
        while (deque.size() && nums[deque.back()] < nums[right]) {
            deque.popBack();
        }

        deque.pushBack(right);

        if (left > deque.front()) {
            deque.popFront();
        }

        if (right + 1 >= k) {
            result[left] = nums[deque.front()];
            left++;
        }

        right++;
    }

    return result;
};