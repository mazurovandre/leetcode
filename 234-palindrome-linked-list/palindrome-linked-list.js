/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    const values = [];

    const countValue = (node) => {
        if (!node) return;

        values.push(node.val);
        countValue(node.next);
    };

    countValue(head);

    let left = 0;
    let right = values.length - 1;

    while (left <= right) {
        if (values[left] !== values[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
};