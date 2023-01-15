/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    return recursion(root);


    function recursion(node){
        if(p.val < node.val && q.val < node.val){
            return recursion(node.left);
        } else if((p.val < node.val && q.val > node.val) || (p.val > node.val && q.val < node.val)){
            return node;
        } else if(p.val > node.val && q.val > node.val){
            return recursion(node.right);
        } else {
            return node;
        }
    }
};