/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const serialize = function(root) {
    let result = [];

    const stringifyNode = (node) => {
        if (!node) {
            result.push('null');
            return;
        }
        result.push(node.val);

        stringifyNode(node.left);
        stringifyNode(node.right);
    }

    stringifyNode(root);

    return result.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
const deserialize = function(data) {
    const tree = data.split(',');
    let depth = 0;

    const createNode = () => {
        if (tree[depth] === 'null') {
            depth++;
            return null;
        }

        const node = new TreeNode(parseInt(tree[depth]));
        depth++;

        node.left = createNode();
        node.right = createNode();

        return node;
    }

    return createNode();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */