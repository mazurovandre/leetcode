/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = function(preorder, inorder) {
    if (!preorder.length || !inorder.length) return null;

    const root = new TreeNode(preorder[0]);
    const middleIndex = inorder.indexOf(preorder[0]);

    const leftPreorderSide = preorder.slice(1, middleIndex + 1);
    const rightPreorderSide = preorder.slice(middleIndex + 1);
    const leftInorderSide = inorder.slice(0, middleIndex);
    const rightInorderSide = inorder.slice(middleIndex + 1);

    root.left = buildTree(leftPreorderSide, leftInorderSide);
    root.right = buildTree(rightPreorderSide, rightInorderSide);

    return root;
};