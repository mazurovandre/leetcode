/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let stack = [];
    let cur = head;
    const result = new ListNode(null);
    let node = result;
    let sortedNodes = [];

    while (cur) {
        stack.push(cur.val);
        cur = cur.next;
    }

    while (stack.length) {
        const part = stack.splice(0, k);
        const resultPart = part.length === k ? part.reverse() : part;

        sortedNodes.push(...resultPart);
    }

    for (let i = 0; i < sortedNodes.length; i++) {
        node.next = new ListNode(sortedNodes[i]);
        node = node.next;
    }

    return result.next;
};