# * Definition for a binary tree node.
# * function TreeNode(val, left, right) {
# *     this.val = (val===undefined ? 0 : val)
# *     this.left = (left===undefined ? null : left)
# *     this.right = (right===undefined ? null : right)
# * }

# * @param {TreeNode} root
# * @return {number[][]}
# * 
# * Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
# * 
# * https://leetcode.com/problems/binary-tree-level-order-traversal/
# * solution: https://youtu.be/6ZnyEApgFYg

def levelOrder(root):
  """
  do in leetcode: 
  https://leetcode.com/problems/binary-tree-level-order-traversal/
  """