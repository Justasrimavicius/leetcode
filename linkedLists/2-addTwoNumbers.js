/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // reverse both lists
    dummy = new ListNode(null);
    let curr = dummy;

    let carry = 0;
    let val;
    while(l1 || l2 || carry){
        if(l1 && l2)val = l1.val + l2.val;
        else if(!l1 && !l2)val = 0;
        else if(!l1)val = l2.val;
        else if(!l2)val = l1.val;

        val += carry;
        carry = 0;
        if(val >= 10){
            carry = 1;
            val = val - 10;
        }
        const node = new ListNode(val, null);
        curr.next = node;
        curr = curr.next;

        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }

    return dummy.next;
};