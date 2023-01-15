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
var goodNodes = function(root) {
    if(!root)return 0;
    let ans = 1;

    function traversal(node, prevHigh){
        if(!node)return;

        if(prevHigh == null){ // first call of traversal
            traversal(node.left, node.val);
            traversal(node.right, node.val);
        } else {
            if(node.val >= prevHigh)ans++;
            if(prevHigh < node.val)prevHigh = node.val;

            traversal(node.left, prevHigh);
            traversal(node.right, prevHigh);

        }

    }
    traversal(root, null);
    return ans;
};