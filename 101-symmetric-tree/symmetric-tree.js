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
var isSymmetric = function(root) {
    const leftPart = [];
    const rightPart = [];

    const handleNode = (node, result, level = 0) => {
        if (!result[level]) {
            result[level] = [];
        }

        if (!node) {
            result[level].push(null);
            
            return;
        }

        result[level].push(node.val);

        handleNode(node.left, result, level + 1);
        handleNode(node.right, result, level + 1);
    }
    
    handleNode(root.left, leftPart, 0);
    handleNode(root.right, rightPart, 0);

    for (let i = 0; i < leftPart.length; i++) {
        const leftArr = leftPart[i];
        const rightArr = rightPart[i];

        for (let j = 0; j < leftArr.length; j++) {
            if (leftArr[j] !== rightArr[rightArr.length - j - 1]) {
                return false;
            }
        }
    }

    return true;
};