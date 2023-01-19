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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    const answer = [];
    

    function bfs(node){
        if(!node)return;
        bfs(node.left);
        answer.push(node.val);
        bfs(node.right);

    }
    bfs(root);
    return answer[k - 1];
};