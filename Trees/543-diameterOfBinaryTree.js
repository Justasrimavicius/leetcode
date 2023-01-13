/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let maxDiam = 0;

    function search(node){
        if(!node)return -1;
        let left = search(node.left);
        let right = search(node.right);
        
        maxDiam = Math.max(maxDiam, 2 + left + right);
        
        return 1 + Math.max(left, right);

    }

    search(root);
    return maxDiam;
};