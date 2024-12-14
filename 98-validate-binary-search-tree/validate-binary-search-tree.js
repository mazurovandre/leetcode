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
const isValidBST = function(root) {
    const isValidNode = function(node, left, right) {
        if (!node) return true;
        if (!(left < node.val && node.val < right)) return false;

        return isValidNode(node.left, left, node.val) && isValidNode(node.right, node.val, right);
    };

    return isValidNode(root, -Infinity, Infinity);
};