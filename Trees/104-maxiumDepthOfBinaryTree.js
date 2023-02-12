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
var maxDepth = function(root) {
    if(!root)return 0;

    let maxDepth = 1;

    function inorder(node, depth){
        if(depth > maxDepth)maxDepth = depth;

        if(node.left){
            inorder(node.left, depth + 1);
        }
        if(node.right){
            inorder(node.right, depth + 1);
        }
    }

    inorder(root, maxDepth);
    return maxDepth;
};

// revision
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
var maxDepth = function(root) {
    if(!root)return 0;
    let maxLength = 0;
    function dfs(node, length){
        if(length > maxLength)maxLength = length;

        if(node.left)dfs(node.left, length + 1);
        if(node.right)dfs(node.right, length + 1);
    }
    dfs(root, 0);
    return maxLength + 1;
};