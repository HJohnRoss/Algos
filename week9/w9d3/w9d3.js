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
 * @return {number[]}
 * 
 * Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.
 * 
 * solution: https://youtu.be/d4zLyf32e3I
 * https://leetcode.com/problems/binary-tree-right-side-view/
 */

const root1 = [1, 2, 3, null, 5, null, 4]
const expected1 = [1, 3, 4]

const root2 = [1, null, 3]
const expected2 = [1, 3]

const root3 = []
const expected3 = []

var rightSideView = function (root) {
  let res = []
  while (root) {
    let furthest;
    if (root.right) {
      furthest = root.right
    } else {
      furthest = root.left
    }
    res.push(root.val)
    root = furthest
  }
  return res
};

var rightSideView = function (root, level = 0, levels = []) {
  if (root === null) {
    return levels
  }

  if (level === levels.length) {
    levels.push(root.val)
  }

  return dfs(root, level, levels)
};

const dfs = (root, level, levels) => {
  if (root.right) {
    rightSideView(root.right, (level + 1), levels)
  }
  if (root.left) {
    rightSideView(root.left, (level + 1), levels)
  }

  return levels
}

console.log(rightSideView(root1))
console.log(rightSideView(root2))
console.log(rightSideView(root3))