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
 * @return {boolean}
 */
var isBalanced = function(root) {
    if(!root)return true;

    let isInbalanced = true;

    function dfs(node){
        if(!node)return 0;
        const left = dfs(node.left);
        const right = dfs(node.right);

        if(Math.abs(left - right) > 1)isInbalanced = false;
        return Math.max(left,right) + 1;
    }
    dfs(root)
    if(isInbalanced == false)return false;
    return true;
};