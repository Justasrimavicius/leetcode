// revision - 6 minutes
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
var reverseList = function(head) {
    if(!head)return head;
 
     let temp = null;
     let next;
    while(head){
        next = head.next;
        head.next = temp;
        temp = head;
        head = next;
    }
    return temp;
 };