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
 * @return {boolean}
 */

const search = function (root) {
    if (root === null) return [1, 0];

    const left = search(root.left);
    const right = search(root.right);

    const isBalanced = left[0] === 1 && right[0] === 1 && Math.abs(left[1] - right[1]) <= 1;
    const height = 1 + Math.max(left[1], right[1]);

    return [isBalanced ? 1 : 0, height];
};

const isBalanced = function(root) {
    return search(root)[0] === 1;
};