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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    if(!subRoot)return true;
    if(!root)return false;

    let value = isSameTree(root, subRoot);
    if(value)return true;

    let left = isSubtree(root.left, subRoot);
    let right = isSubtree(root.right, subRoot);
    if(left || right)return true;
    return false;

    function isSameTree(node, subNode){
        if(!node && !subNode){
            return true;
        } else if(!node || !subNode){
            return false;
        }
        if(node.val != subNode.val)return false;
        let left = isSameTree(node.left, subNode.left);
        let right = isSameTree(node.right, subNode.right);
        if(left && right)return true;
        return false;
    }
};