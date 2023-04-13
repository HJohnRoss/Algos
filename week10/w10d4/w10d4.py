
# * Definition for a binary tree node.
# * function TreeNode(val, left, right) {
# *     this.val = (val===undefined ? 0 : val)
# *     this.left = (left===undefined ? null : left)
# *     this.right = (right===undefined ? null : right)
# * }

# * @param {number[]} preorder
# * @param {number[]} inorder
# * @return {TreeNode}
# * 
# * Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal
# * of the same tree, construct and return the binary tree.
# * 
# * https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
# * solution: https://youtu.be/ihj4IQGZ2zc


def buildTree(preorder, inorder):
  """
  do in leetcode: 
  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
  """