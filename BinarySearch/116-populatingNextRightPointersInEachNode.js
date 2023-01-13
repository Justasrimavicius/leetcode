/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if(!root)return null;
    root.next = null;


    let curr = root;
    let nextLevel = curr.left;
    initialRecursion(curr);

    function initialRecursion(node){
        if(!node.left)return;

        node.left.next = node.right;
        if(node.next){
            node.right.next = node.next.left;
        } else {
            node.right.next = null;
        }

        if(curr.next == null){
            curr = nextLevel;
            nextLevel = curr.left;
        } else {
            curr = curr.next;
        }

        initialRecursion(curr);
    }
    return root;
};