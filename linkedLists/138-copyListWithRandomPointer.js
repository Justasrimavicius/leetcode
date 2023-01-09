/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    let map = new Map();
    map.set(null, null);
    curr = head;

    while(curr){
        let newNode = new Node(curr.val);
        map.set(curr, newNode);
        curr = curr.next;
    }

    curr = head;
    
    while(curr){
        let node = map.get(curr);
        node.next = map.get(curr.next);
        node.random = map.get(curr.random);
        curr = curr.next;
    }
    return map.get(head);
};