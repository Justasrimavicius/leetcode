/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    
    let isSame = true;

    function dfs(node1, node2){
        if(!node1 && !node2){
            return;
        } else if(!node1 || !node2){
            isSame = false;
        } else {

        if(node1.val != node2.val){
            isSame = false;
        }

        dfs(node1.left, node2.left);
        dfs(node1.right, node2.right);
        }
    }

    dfs(p,q);
    return isSame;
};

// revision - <10 minutes

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(!p && !q)return true;
    if(!p || !q)return false;
    if(p.val != q.val)return false;

    let ans = true;
    function bfs(p, q){
        if(!p && !q)return true;
        if((!p && q) || (p && !q)){
            ans = false;
            return false;
        }

        if(p.val != q.val){
            ans = false;
            return false;
        }

        bfs(p.left, q.left);
        bfs(p.right, q.right);
    }
    bfs(p, q);
    return ans;
};