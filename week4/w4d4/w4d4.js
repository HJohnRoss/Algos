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
 */

// do inside of leetcode
var invertTree = function (root) {
  if (root) {
    let left = root.left
    root.left = invertTree(root.right)
    root.right = invertTree(left)
  }
  return root
};

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
 * @return {number}
 * 
 * Given the root of a binary tree, return its maximum depth.
 * 
 * A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 * 
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
 * Solution: https://youtu.be/OnSn2XEQ4MY
 */
var maxDepth = function (root) {
  if (root) {
    var left = count(root.left)
    var right = count(root.right)
    if (left > right) {
      return left
    }
    return right
  }
  return 0
};

const count = (root, max = 1) => {
  if (root) {
    var left = count(root.left, max + 1)
    var right = count(root.right, max + 1)
    if (left > right) {
      return left
    }
    return right
  }
  return max
}