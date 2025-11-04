/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function(head) {
    let sum = 0;
    let result = new ListNode();
    let node = result;
    let curr = head;

    while (curr) {
        if (curr.val === 0) {
            if (sum) {
                node.next = new ListNode(sum);
                node = node.next;
                sum = 0;
            }
        } else {
            sum += curr.val;
        }
        curr = curr.next;
    }

    return result.next;
};