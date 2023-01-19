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
 * @return {number[][]}
 */
const levelOrder = (root) => {
    if(!root) return [];
    
    let q = [root];
    let res = [];
    
    while(q.length){
        const len = q.length;
        
        const levelArray = [];
        for(let i = 0; i < len; i++){
            const n = q.shift();
            levelArray.push(n.val);
            
            if(n.left)q.push(n.left);
            if(n.right)q.push(n.right);
        }
        
        res.push(levelArray);
    }
    
    return res;
};
