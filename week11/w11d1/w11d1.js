/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 * 
 * Given the head of a linked list, remove the nth node from the end of the list and return its head.
 * 
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 * solution: https://youtu.be/5Y2EiZST97Y
 */
var removeNthFromEnd = function (head, n) {
  const newNode = new ListNode()

  newNode.next = head

  const fast = moveFast(newNode, n)
  const slow = moveSlow(newNode, fast)

  slow.next = slow.next.next || null

  return newNode.next
};

const moveFast = (fast, n) => {
  for (let i = 1; i <= (n + 1); i++) {
    fast = fast.next
  }

  return fast
}

const moveSlow = (slow, fast) => {
  while (fast) {
    slow = slow.next
    fast = fast.next
  }

  return slow
}