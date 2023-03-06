#  * Definition for a binary tree node.
#  * function TreeNode(val, left, right) {
#  *     this.val = (val===undefined ? 0 : val)
#  *     this.left = (left===undefined ? null : left)
#  *     this.right = (right===undefined ? null : right)
#  * }
#
#
#  * @param {TreeNode} p
#  * @param {TreeNode} q
#  * @return {boolean}
#  * 
#  * solution: https://youtu.be/vRbbcKXCxOw
#  * https://leetcode.com/problems/same-tree/


def isSameTree(p, q):
  """
  do inside of leetcode: https://leetcode.com/problems/same-tree/
  """



# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
#
# https://leetcode.com/problems/subtree-of-another-tree/
# solution: https://youtu.be/E36O5SWp-LE
def isSubtree(root, subRoot):
  """
  do here: https://leetcode.com/problems/subtree-of-another-tree/
  :type root: TreeNode
  :type subRoot: TreeNode
  :rtype: bool
  """