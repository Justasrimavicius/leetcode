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



// revision - 10 minutes
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
    if(head == null || head.next == null)return false;

    let slowP = head.next;
    let fastP = head.next.next;

    while(true){
        if(slowP == fastP){
            return true;
        } else if(slowP.next == null || fastP == null || fastP.next == null){
            return false;
        }

        slowP = slowP.next;
        fastP = fastP.next.next;
    }
};