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
 * Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.
 * Return the number of good nodes in the binary tree.
 * 
 * leetcode: https://leetcode.com/problems/count-good-nodes-in-binary-tree/
 * solution: https://youtu.be/7cp5imvDzl4
 */

const root1 = [3, 1, 4, 3, null, 1, 5]
const expected1 = 4
// Explanation: Nodes in blue are good.
// Root Node (3) is always a good node.
// Node 4 -> (3,4) is the maximum value in the path starting from the root.
// Node 5 -> (3,4,5) is the maximum value in the path
// Node 3 -> (3,1,3) is the maximum value in the path.

const root2 = [3, 3, null, 4, 2]
const expected2 = 3
// Explanation: Node 2 -> (3, 3, 2) is not good, because "3" is higher than it.

const root3 = [1]
const expected3 = 1
// Explanation: Root is considered as good.

var goodNodes = function (root, count = [1], prevNode = root) {
  let first = getGoodNodes(root.left, count, prevNode)
  let second = getGoodNodes(root.right, count, prevNode)

  return first + second
};

const getGoodNodes = (root, count, prevNode) => {
  if (root) {
    if (prevNode.val <= root.val) {
      count[0]++
    }
    if (root.left && root.right) {
      return goodNodes(root.left, count, root.val) + goodNodes(root.right, count, root.val)
    } else if (root.left && root.right === null) {
      return goodNodes(root.left, count, root.val)
    } else if (root.left === null && root.right) {
      return goodNodes(root.right, count, root.val)
    }
  }
  return count
}