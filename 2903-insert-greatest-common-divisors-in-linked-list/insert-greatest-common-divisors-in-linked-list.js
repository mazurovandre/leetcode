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
var insertGreatestCommonDivisors = function(head) {
    const gcd = (a, b) => {
        if (!b) {
            return a;
        }

        return gcd(b, a % b);
    };
    const addAvg = (node) => {
        if (!node || !node.next) return;

        const next = node.next;
        node.next = new ListNode(gcd(node.val, next.val), next);

        addAvg(next);
    };

    addAvg(head);

    return head;  
};