/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    const nodes = [];

    while (head) {
        nodes.push(head);
        head = head.next;
    }

    let left = 0;
    let right = nodes.length - 1;

    while (left < right) {
        nodes[left].next = nodes[right];
        left++;

        if (left >= right) break;

        nodes[right].next = nodes[left];
        right--;
    }

    nodes[left].next = null;
};