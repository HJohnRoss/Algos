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
 * 
 * Given the root of a binary tree, invert the tree, and return its root.
 * 
 * https://leetcode.com/problems/invert-binary-tree/
 * Solution: https://youtu.be/OnSn2XEQ4MY
 * 
 * 
 */

// do inside of leetcode
var invertTree = function (root) {
  if (root) {
    let temp = root.left
    root.left = root.right
    root.right = temp

    invertTree(root.left)
    invertTree(root.right)
  }
  return root
};