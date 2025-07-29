/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = [];

    const backtracking = (remaining, start, path) => {
        if (remaining < 0) return;

        if (remaining === 0) {
            result.push([...path]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            path.push(candidates[i]);
            backtracking(remaining - candidates[i], i, path);
            path.pop();
        }
    }
    
    backtracking(target, 0, []);
    return result;
};