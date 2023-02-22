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


// revision 28 mins
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
    if(!head)return head;

    let map = new Map();
    map.set(null, null);

    let oldHeadCopy = head;
    let tempNode;
    while(oldHeadCopy){
        tempNode = new Node(oldHeadCopy.val);
        map.set(oldHeadCopy, tempNode);

        oldHeadCopy = oldHeadCopy.next;
    }

    oldHeadCopy = head;

    while(oldHeadCopy){
        let newNode = map.get(oldHeadCopy);
        newNode.random = map.get(oldHeadCopy.random);
        newNode.next = map.get(oldHeadCopy.next);

        oldHeadCopy = oldHeadCopy.next;
    }

    return map.get(head);
};