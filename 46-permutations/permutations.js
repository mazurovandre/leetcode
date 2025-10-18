/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [];
    const used = Array(nums.length).fill(false);
    let current = [];

    const dfs = () => {
        if (current.length === nums.length) {
            result.push([...current]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;
            used[i] = true;
            current.push(nums[i]);
            dfs();
            current.pop();
            used[i] = false;
        }
    }

    dfs();
    return result;
};