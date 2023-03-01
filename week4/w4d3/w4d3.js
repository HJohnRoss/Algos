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
 * @param {TreeNode} subRoot
 * @return {boolean}
 * 
 * Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of
 * subRoot and false otherwise.
 * 
 * A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be
 * considered as a subtree of itself.
 * 
 * https://leetcode.com/problems/subtree-of-another-tree/
 * solution: https://youtu.be/E36O5SWp-LE
 */
var isSubtree = function (root, subRoot) {
  var isSubtree = function (root, subRoot) {
    if (!root) {
      return false
    }

    if (compare(root, subRoot)) {
      return true
    }

    let left = isSubtree(root.left, subRoot)
    let right = isSubtree(root.right, subRoot)

    if (left || right) {
      return true
    }
    return false
  };

  const compare = (root, subRoot) => {
    if (!root || !subRoot) {
      if (root === subRoot) {
        return true
      } else {
        return false
      }
    }

    if (root.val !== subRoot.val) {
      return false
    }

    const left = compare(root.left, subRoot.left)
    const right = compare(root.right, subRoot.right)

    if (left && right) {
      return true
    }
    return false
  }
};