
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(preorder.length == 0 || inorder.length == 0)return null;

    const root = new TreeNode(preorder[0], null, null);
    const splittingIndex = inorder.indexOf(preorder[0]);

    root.left = buildTree(preorder.slice(1, splittingIndex + 1), inorder.slice(0, splittingIndex))
    root.right = buildTree(preorder.slice(splittingIndex + 1), inorder.slice(splittingIndex + 1))
    return root;


};