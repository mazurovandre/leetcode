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
var countNodes = function(root) {
    let result = 0;

    const dfs = (node) => {
        if (!node) return;

        result++;
        dfs(node.left);
        dfs(node.right);
    };

    dfs(root);
    return result;
};