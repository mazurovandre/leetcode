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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
const isSubtree = function(root, subRoot) {
    const isRootEqual = isEqual(root, subRoot);

    if (isRootEqual || !subRoot) return true;
    if (!root) return false;
    
    const isLeftSubtree = isSubtree(root.left, subRoot);
    const isRightSubtree = isSubtree(root.right, subRoot);

    return isLeftSubtree || isRightSubtree;
};

const isEqual = function(root, subRoot) {
    if (!root && !subRoot) return true;
    if (!root || !subRoot || root.val !== subRoot.val) return false;

    const leftEqual = isEqual(root.left, subRoot.left);
    const rightEqual = isEqual(root.right, subRoot.right);

    return leftEqual && rightEqual;
}