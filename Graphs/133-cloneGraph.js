/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if(!node)return;

    let map = new Map();
    
    function clone(newNode){
        console.log(newNode)
        if(map.get(newNode) !== undefined)return map.get(newNode);
        
        let copy = new Node(newNode.val);
        map.set(newNode, copy)

        for(let i = 0; i < newNode.neighbors.length; i++){
            copy.neighbors.push(clone(newNode.neighbors[i]));
        }
        return copy;
    }
    return clone(node);
};