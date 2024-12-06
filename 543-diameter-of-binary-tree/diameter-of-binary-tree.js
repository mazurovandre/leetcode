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

const search = function(root, res) {
    if (root === null) return 0;

    const left = search(root.left, res);
    const right = search(root.right, res);

    res[0] = Math.max(res[0], left + right);
    
    return 1 + Math.max(left, right);
}

const diameterOfBinaryTree = function(root) {
    const res = [0];
    search(root, res);

    return res[0];
};
