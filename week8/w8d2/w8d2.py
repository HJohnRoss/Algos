# * Definition for a binary tree node.
# * function TreeNode(val) {
# *     this.val = val;
# *     this.left = this.right = null;
# * }


# * @param {TreeNode} root
# * @param {TreeNode} p
# * @param {TreeNode} q
# * @return {TreeNode}
# * 
# * Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.
# * 
# * According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T
# * that has both p and q as descendants (where we allow a node to be a descendant of itself).”
# * 
# * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
# * solution: https://youtu.be/gs2LMfuOR9k

def lowestCommonAncestor(root, p, q):
  """
  do in leetcode:
  https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
  """