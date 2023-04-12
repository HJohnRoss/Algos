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
 * @param {number} k
 * @return {number}
 * 
 * Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.
 * 
 * https://leetcode.com/problems/kth-smallest-element-in-a-bst/
 * solution: https://youtu.be/5LUXSvjmGCw
 */

var kthSmallest = function (root, k, res = []) {
  if (!root) {
    return res
  }
  return dfs(root, k, res)
};

const dfs = (root, k, res = []) => {
  if (root.left) {
    kthSmallest(root.left, k, res)
  }
  res.push(root.val)
  if (root.right) {
    kthSmallest(root.right, k, res)
  }
  return res[(k - 1)]
}