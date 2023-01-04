/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // firstly, find the length of linked list

    const dummyNode = new ListNode(null, head);

    let leftP = dummyNode;
    let rightP = head;

    // use 2 pointer approach - if we need to remove n-th element from the back, the difference between left and right pointers need to be n(for this specific case it will be n + 1, because we add a dummyNode at the start make make leftP the dummyNode, because we need the reference of the node before the one we remove)


    // get the right pointer in its position
    while(rightP && n >= 1){
        rightP = rightP.next;
        n--;
    }
    
    // go through the list until right pointer is null, increment both pointers
    while(rightP){
        leftP = leftP.next;
        rightP = rightP.next;
    }
    
    // when right pointer reaches null, left pointers next value is the one we need to remove.
    leftP.next = leftP.next.next;

    
    return dummyNode.next;

};