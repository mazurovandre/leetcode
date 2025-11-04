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
var swapPairs = function(head) {
    let curr = head;

    while(curr && curr.next) {
        const val1 = curr.val;
        const val2 = curr.next.val;

        curr.next.val = val1;
        curr.val = val2;

        curr = curr.next.next;
    }

    return head;
};