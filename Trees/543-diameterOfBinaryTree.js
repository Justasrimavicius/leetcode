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

// revision - around 10 minutes
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
    let maxLength = 0;

    function recursion(node){
        let rightDiam = node.right ? recursion(node.right) : 0;
        let leftDiam = node.left ? recursion(node.left) : 0;

        if(leftDiam + rightDiam > maxLength)maxLength = leftDiam + rightDiam;
        return Math.max(rightDiam, leftDiam) + 1;
    }
    recursion(root);


    return maxLength;
};