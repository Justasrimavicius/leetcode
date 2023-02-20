/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    // firstly reverse the second half of the list.
    // For that, we need to figure out what is the second half.
    // Using a fast pointer and a slow pointer, we go through the linked list
    // and find when the fast pointer reaches the last element(fastP.next == null) or it reaches null(it goes beyond last element once).
    // the slow pointer will indicate, that slowP.next is the value that is the start of 
    // our second half of the list.
    let fastP = head.next;
    let slowP = head;
    while(fastP != null && fastP.next != null){
        slowP = slowP.next;
        fastP = fastP.next.next;
    }
    // slowP.next is the first value of the second half of our list. After it we should reverse it. Every node that goes after it should have a reversed link.
    let secondHead = slowP.next;
    // cut the first and the second list parts
    slowP.next = null;

    let prev = null;
    let curr = secondHead;
    let tmp;
    while(curr){
        tmp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = tmp;
    }
    // prev value is the head of second list
    secondHead = prev;

    // we got 2 lists that go towards each other - now merge
    // the 2 lists are either same length or the second one is smaller, so the while condition is with the second list
    let firstListTemp;
    let secondListTemp;
    while(secondHead){
        firstListTemp = head.next;
        head.next = secondHead;

        secondListTemp = secondHead.next;
        secondHead.next = firstListTemp;

        head = firstListTemp;
        secondHead = secondListTemp;
    }



};



// revision 35 minutes
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if(!head.next)return head;
    // first half(if unequal num. - more than the other half) is in original head, second half in secondHead
    let slowP = head;
    let fastP = head.next;

    while(fastP && fastP.next){
        slowP = slowP.next;
        fastP = fastP.next.next;
    }
    secondHead = slowP.next;
    slowP.next = null;

    // inverse secondHead
    let temp = null;
    let prev = null;
    while(secondHead){
        temp = secondHead.next;
        secondHead.next = prev;
        prev = secondHead;
        secondHead = temp;
    }
    secondHead = prev;

    
    // combine

    let firstTemp;
    let secondTemp;

    while(secondHead){
        firstTemp = head.next;
        head.next = secondHead;
        head = firstTemp;

        secondTemp = secondHead.next;
        secondHead.next = head;
        secondHead = secondTemp;
    }


};