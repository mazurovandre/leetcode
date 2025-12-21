/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var averageOfSubtree = function(root) {
    let result = 0;

    const countAverage = (node) => {
        if (!node) {
            return [0, 0];
        }
        
        const left = countAverage(node.left);
        const right = countAverage(node.right);

        const nodeSum = left[0] + right[0] + node.val;
        const nodeCount = left[1] + right[1] + 1;

        if (node.val === Math.floor(nodeSum / nodeCount)) {
            result++;
        }

        return [nodeSum, nodeCount];
    }

    countAverage(root);

    return result;
};