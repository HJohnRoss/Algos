# * Definition for singly-linked list.
# * function ListNode(val) {
# *     this.val = val;
# *     this.next = null;
# * }

# * @param {ListNode} head
# * @return {boolean}
# * 
# * Given head, the head of a linked list, determine if the linked list has a cycle in it.
# * 
# * There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally,
# * pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
# * 
# * Return true if there is a cycle in the linked list. Otherwise, return false.
# * 
# * https://leetcode.com/problems/linked-list-cycle/
# * solution: https://youtu.be/gBTe7lFR3vc

def hasCycle(self, head):
  tempHead = head
  check = head

  while tempHead and tempHead.next:
    tempHead = tempHead.next.next
    check = check.next
    if check == tempHead:
        return True
  return False