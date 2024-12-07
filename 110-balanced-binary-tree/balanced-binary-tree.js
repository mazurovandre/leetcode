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

const getHeight = function (root) {
    if (root === null) return 0;

    const left = getHeight(root.left);
    const right = getHeight(root.right);

    return 1 + Math.max(left, right);
};

const isBalanced = function(root) {
    if (root === null) return true;

    const leftHeight = getHeight(root.left);
    const rightHeight = getHeight(root.right);

    if (Math.abs(leftHeight - rightHeight) > 1) return false;

    return isBalanced(root.left) && isBalanced(root.right);
};