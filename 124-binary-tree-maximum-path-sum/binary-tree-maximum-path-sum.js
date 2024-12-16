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
const maxPathSum = (root) => {
    let result = root.val;

    const countMaxPath = (node) => {
        if (!node) return 0;

        const leftMax = Math.max(countMaxPath(node.left, result), 0);
        const rightMax = Math.max(countMaxPath(node.right, result), 0);
        const pathSum = node.val + leftMax + rightMax;

        result = Math.max(result, pathSum);

        return node.val + Math.max(leftMax, rightMax);
    }

    countMaxPath(root);

    return result;
};