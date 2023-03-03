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
 * Given the root of a binary tree, return the length of the diameter of the tree.
 * 
 * The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.
 * 
 * The length of a path between two nodes is represented by the number of edges between them.
 * 
 * https://leetcode.com/problems/diameter-of-binary-tree
 * solution: https://youtu.be/bkxqA8Rfv04
 */
var diameterOfBinaryTree = function (root, max = [0]) {
  if (!root) {
    return 0
  }

  getHeight1(root, max)
  return max[0]
};

const getHeight1 = (root, max) => {
  if (!root) {
    return 0
  }
  let left = getHeight1(root.left, max)
  let right = getHeight1(root.right, max)

  if (left + right > max[0]) {
    max[0] = left + right
  }

  let current = Math.max(left, right)
  return current + 1
}

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
 * @return {boolean}
 * 
 * Given a binary tree, determine if it is height-balanced
 * 
 * solution: https://youtu.be/QfJsau0ItOY
 * https://leetcode.com/problems/balanced-binary-tree/
 */
var isBalanced = function (root) {
  if (!root) {
    return true
  }
  let result = isValid(root)
  return result
}

const isValid = (root) => {
  let left = getHeight(root.left)
  let right = getHeight(root.right)

  if (left - right <= 1) {
    return true
  }
  return false
}

const getHeight = (root) => {
  if (!root) {
    return 0
  }
  let left = getHeight(root.left)
  let right = getHeight(root.right)

  const height = Math.max(left, right)

  return height + 1
}