/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 * 
 * Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.
 * 
 * According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T
 * that has both p and q as descendants (where we allow a node to be a descendant of itself).”
 * 
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
 * solution: https://youtu.be/gs2LMfuOR9k
 */
var lowestCommonAncestor = function (root, p, q) {
  while (root) {
    if (root.val < p.val && root.val < q.val) {
      root = root.right
      continue
    }
    if (p.val < root.val && q.val < root.val) {
      root = root.left
      continue
    }
    break
  }

  return root
};