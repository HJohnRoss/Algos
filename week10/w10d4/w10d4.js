/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 * 
 * Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal
 * of the same tree, construct and return the binary tree.
 * 
 * https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 * solution: https://youtu.be/ihj4IQGZ2zc
 */


var buildTree = function (preorder, inorder, max = -Infinity, indices = { preorder: 0, inorder: 0 }) {
  if (preorder.length <= indices.inorder) {
    return null
  }

  if (inorder[indices.inorder] === max) {
    indices.inorder++
    return null
  }

  return dfs(preorder, inorder, max, indices)
};

const dfs = (preorder, inorder, max, indices) => {
  const val = preorder[indices.preorder++]
  const root = new TreeNode(val)

  root.left = buildTree(preorder, inorder, root.val, indices)
  root.right = buildTree(preorder, inorder, max, indices)

  return root
}