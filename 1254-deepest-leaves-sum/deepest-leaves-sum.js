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
var deepestLeavesSum = function(root) {
    let sum = 0;
    let level = 0;

    const dps = (node, lvl) => {
        if (!node) return;

        if (!node.left && !node.right) {
            if (lvl === level) {
                sum += node.val
            }
            if (lvl > level) {
                level = lvl;
                sum = node.val;
            }
        }

        dps(node.left, lvl + 1);
        dps(node.right, lvl + 1);
    }

    dps(root, 0);

    return sum;
};