# * Definition for a binary tree node.
# * function TreeNode(val, left, right) {
# *     this.val = (val===undefined ? 0 : val)
# *     this.left = (left===undefined ? null : left)
# *     this.right = (right===undefined ? null : right)
# * }
# *
# * @param {TreeNode} root
# * @return {number}
# * 
# * Given the root of a binary tree, return its maximum depth.
# * 
# * A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
# * 
# * https://leetcode.com/problems/maximum-depth-of-binary-tree/
# * Solution: https://youtu.be/OnSn2XEQ4MY


# Do on leetcode https://leetcode.com/problems/maximum-depth-of-binary-tree/
def maxDepth(root):
  arr = deque()

  if root:
      arr.append(root)
  
  count = 0

  while arr:
      for i in range(len(arr)):
          node = arr.popleft()
          if node.left:
              arr.append(node.left)
          if node.right:
              arr.append(node.right)
      count += 1
  return count