#  * Definition for a binary tree node.
#  * function TreeNode(val, left, right) {
#  *     this.val = (val===undefined ? 0 : val)
#  *     this.left = (left===undefined ? null : left)
#  *     this.right = (right===undefined ? null : right)
#  * }
#  * @param {TreeNode} root
#  * @return {number}
#  * 
#  * Given the root of a binary tree, return the length of the diameter of the tree.
#  * 
#  * The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.
#  * 
#  * The length of a path between two nodes is represented by the number of edges between them.
#  * 
#  * https://leetcode.com/problems/diameter-of-binary-tree
#  * solution: https://youtu.be/bkxqA8Rfv04


def diameterOfBinaryTree(root):
  """
  Solve this here
  https://leetcode.com/problems/diameter-of-binary-tree
  """
  
  
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
# --------------------------------------------------------
# Given a binary tree, determine if it is height-balanced
# --------------------------------------------------------
# solution: https://youtu.be/QfJsau0ItOY
# https://leetcode.com/problems/balanced-binary-tree/
class Solution(object):
  def isBalanced(self, root):
    """
    Do in leetcode: https://leetcode.com/problems/balanced-binary-tree/
    :type root: TreeNode
    :rtype: bool
    """