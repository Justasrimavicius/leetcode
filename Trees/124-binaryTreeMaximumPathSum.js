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
var maxPathSum = function(root) {
    if(!root.left && !root.right)return root.val;

    let ans = Number.NEGATIVE_INFINITY;

    function inorder(node){
        if(!node)return 0;

        let leftSum = inorder(node.left);
        leftSum = Math.max(leftSum, 0); // if leftSum is negative, taking it in as a path will result in a smaller path sum, therefore we should not take it in and instead take 0.

        let rightSum = inorder(node.right);
        rightSum = Math.max(rightSum, 0); // same as leftSum.

        ans = Math.max(leftSum + rightSum + node.val, ans);

        return Math.max(leftSum + node.val, rightSum + node.val);

    }

    inorder(root);

    return ans;
};