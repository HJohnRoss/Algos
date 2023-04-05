# * Definition for a binary tree node.
# * function TreeNode(val, left, right) {
# *     this.val = (val===undefined ? 0 : val)
# *     this.left = (left===undefined ? null : left)
# *     this.right = (right===undefined ? null : right)
# * }

# * @param {TreeNode} root
# * @return {number[]}
# * 
# * Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.
# * 
# * solution: https://youtu.be/d4zLyf32e3I
# * https://leetcode.com/problems/binary-tree-right-side-view/

root1 = [1,2,3,None,5,None,4]
expected1 = [1,3,4]

root2 = [1,None,3]
expected2 = [1,3]

root3 = []
expected3 = []

def rightSideView(root):
  """
  :type root: TreeNode
  :rtype: List[int]
  """

print(rightSideView(root1))
print(rightSideView(root2))
print(rightSideView(root3))