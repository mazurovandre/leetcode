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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    let result = 0;

    const handleNode = (node) => {
        if (!node) return;
        if (node.val <= high && node.val >= low) {
            result += node.val;
        }
        
        handleNode(node.left);
        handleNode(node.right);
    };

    handleNode(root);

    return result;
};