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
var isValidBST = function(root) {
    if(!root.left && !root.right)return true;
    let answer = true;
    function traversal(node, leftBoundary, rightBoundary){
        if(!node)return;
        if(node.val > leftBoundary && node.val < rightBoundary){
            // everything is good
        } else{
            answer = false;
            return;
        }

        if(node.left)traversal(node.left, leftBoundary, node.val);
        if(node.right)traversal(node.right, node.val, rightBoundary);
    }
    traversal(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
    return answer;
};