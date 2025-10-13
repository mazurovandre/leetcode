/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let listA = headA;
    let listB = headB;

    while (listA) {
        while (listB) {
            if (listB === listA) {
                return listA;
            }
            
            listB = listB.next;
        }
        
        listB = headB;
        listA = listA.next;
    }
};