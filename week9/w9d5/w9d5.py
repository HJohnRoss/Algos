# * Definition for a binary tree node.
# * function TreeNode(val, left, right) {
# *     this.val = (val===undefined ? 0 : val)
# *     this.left = (left===undefined ? null : left)
# *     this.right = (right===undefined ? null : right)
# * }

# * @param {TreeNode} root
# * @return {number}
# * 
# * Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.
# * Return the number of good nodes in the binary tree.
# * 
# * leetcode: https://leetcode.com/problems/count-good-nodes-in-binary-tree/
# * solution: https://youtu.be/7cp5imvDzl4

root1 = [3,1,4,3,None,1,5]
expected1 = 4
# Explanation: Nodes in blue are good.
# Root Node (3) is always a good node.
# Node 4 -> (3,4) is the maximum value in the path starting from the root.
# Node 5 -> (3,4,5) is the maximum value in the path
# Node 3 -> (3,1,3) is the maximum value in the path.

root2 = [3,3,None,4,2]
expected2 = 3
# Explanation: Node 2 -> (3, 3, 2) is not good, because "3" is higher than it.

root3 = [1]
expected3 = 1
# Explanation: Root is considered as good.

def goodNodes(root):
  """ 
  do in leetcode: https://leetcode.com/problems/count-good-nodes-in-binary-tree/
  """