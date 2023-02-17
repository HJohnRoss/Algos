#  * @param {number[]} nums
#  * @param {number} target
#  * @return {number}
#  * 
#  * Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target
#  * exists, then return its index. Otherwise, return -1.
#  * 
#  * You must write an algorithm with O(log n) runtime complexity.
#  * 
#  * https://leetcode.com/problems/binary-search/\
#  * solution: https://youtu.be/s4DPM8ct1pI


nums1 = [-1,0,3,5,9,12]
target1 = 9
expected1 = 4
# Explanation: 9 exists in nums and its index is 4

nums2 = [-1,0,3,5,9,12]
target2 = 2
expected2 = -1
# Explanation: 2 does not exist in nums so return -1

def search(nums, target):
  """
  :type nums: List[int]
  :type target: int
  :rtype: int
  """


print(search(nums1, target1))
print(search(nums2, target2))