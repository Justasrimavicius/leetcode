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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    let stack = [];
    let answer = [];
    function recursion(node){
        if(!node)return;
        answer.push(node.val);
        
        recursion(node.left);
        recursion(node.right);

    }
    recursion(root);
    return answer;
};