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
 * 
 * Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
 * 
 * https://leetcode.com/problems/binary-tree-level-order-traversal/
 * solution: https://youtu.be/6ZnyEApgFYg
 */
var levelOrder = function (root, level = 0, arr = []) {
  if (!root) {
    return arr
  }
  if (level === arr.length) {
    arr.push([])
  }

  arr[level].push(root.val)

  return leftRight(root, level, arr)
};

const leftRight = (root, level, arr) => {
  if (root.left) {
    levelOrder(root.left, (level + 1), arr)
  }
  if (root.right) {
    levelOrder(root.right, (level + 1), arr)
  }
  return arr
}