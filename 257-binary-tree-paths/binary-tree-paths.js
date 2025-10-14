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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const result = [];

    const analyzeNode = (node, arr) => {
        arr.push(node.val)

        if (node.left) {
            analyzeNode(node.left, [...arr])
        }

        if (node.right) {
            analyzeNode(node.right, [...arr])
        }
        
        if (!node?.left && !node?.right) {
            result.push(arr.join('->'))
            return;
        }
    }

    analyzeNode(root, []);

    return result;
};