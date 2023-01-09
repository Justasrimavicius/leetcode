/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // let map = new Map();
    // while(head){
    //     map.set(head, true);
    //     if(map.get(head.next))return true;

    //     head = head.next;
    // }
    if(!head)return false;
    if(head.next == head)return true;

    let fastP = head.next;
    let slowP = head;
    while(fastP && fastP.next){
        if(fastP == slowP)return true;
        fastP = fastP.next.next;
        slowP = slowP.next;
    }

    return false;
};