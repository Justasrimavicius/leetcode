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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(!root)return root;

    let queue = [];
    bfs(root);
    return root;

    function bfs(node){
        if(!node.left && !node.right){
            if(queue.length == 0)return root;
            bfs(queue.shift());
        } else {

            if(!node.left){
                node.left = node.right;
                node.right = null;
            } else if(!node.right){
                node.right = node.left;
                node.left = null;
            } else {
                let temp = node.left;
                node.left = node.right;
                node.right = temp;
            }
            
            if(node.left)queue.push(node.left);
            if(node.right)queue.push(node.right);

            bfs(queue.shift());
        }

    }
};

// revision - 7-9 minutes
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(!root)return root;

    let queue = [];
    let temp;

    function levelTraversal(node){
        if(!node)return;

        temp = node.right;
        node.right = node.left;
        node.left = temp;

        if(node.right)queue.push(node.right);
        if(node.left)queue.push(node.left);

         if(queue.length == 0)return;

        return levelTraversal(queue.shift());
    }
    levelTraversal(root);
    return root;
};