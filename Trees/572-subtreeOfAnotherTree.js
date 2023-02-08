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

// revision - took longer than it should have...
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
    let originalQueue = [];
    let copyQueue = [];

    function compareTrees(){
        if(originalQueue.length == 0 && copyQueue.length == 0)return true;
        if(originalQueue.length != copyQueue.length)return false;
        
        let orgNode = originalQueue.shift()
        let copyNode = copyQueue.shift()
        if(orgNode == null && copyNode == null)return compareTrees();
        if(orgNode == null && copyNode != null || orgNode != null && copyNode == null)return false;

        if(orgNode.val == copyNode.val){
            originalQueue.push(orgNode.left)
            originalQueue.push(orgNode.right)
            copyQueue.push(copyNode.left)
            copyQueue.push(copyNode.right)

            return compareTrees();
        } else {
            return false;
        }
    }

    function checkIfSubTree(node){
        if(!node)return false;

        if(node.val == subRoot.val){
            originalQueue.push(node);
            copyQueue.push(subRoot);
            if(compareTrees())return true;
        }
        originalQueue = [];
        copyQueue = [];
        if(checkIfSubTree(node.left)) return true;
        if(checkIfSubTree(node.right)) return true;

    }

    if(checkIfSubTree(root))return true;

    return false;
};