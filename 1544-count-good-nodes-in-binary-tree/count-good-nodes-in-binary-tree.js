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
var goodNodes = function(root) {
    let count = 0;

    const countNodes = (node, maxValue) => {
        if (!node) return;

        if (node.val >= maxValue) {
            count += 1;
        }

        countNodes(node.left, Math.max(maxValue, node.val));
        countNodes(node.right, Math.max(maxValue, node.val));
    }

    countNodes(root, root.val);

    return count;
};