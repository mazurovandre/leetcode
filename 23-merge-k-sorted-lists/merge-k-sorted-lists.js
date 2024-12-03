/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    const nodes = [];

    lists.forEach(list => {
        while (list) {
            nodes.push(list.val);
            list = list.next;
        }
    });

    nodes.sort((a, b) => a - b);

    const result = new ListNode(null);
    let current = result;

    nodes.forEach(node => {
        current.next = new ListNode(node);
        current = current.next;
    })

    return result.next;
};