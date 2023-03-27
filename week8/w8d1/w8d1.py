#  * @param {number[]} nums
#  * @return {number}
#  * 
#  * Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:
#  * - [4,5,6,7,0,1,2] if it was rotated 4 times.
#  * - [0,1,2,4,5,6,7] if it was rotated 7 times.
#  * 
#  * Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
#  * 
#  * Given the sorted rotated array nums of unique elements, return the minimum element of this array.
#  * 
#  * You must write an algorithm that runs in O(log n) time.
#  * https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
#  * solution: https://youtu.be/U8XENwh8Oy8

nums1 = [3,4,5,1,2]
expected1 = 1
# Explanation: The original array was [1,2,3,4,5] rotated 3 times.

nums2 = [4,5,6,7,0,1,2]
expected2 = 0
# Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.

nums3 = [11,13,15,17]
expected3 = 11
# Explanation: The original array was [11,13,15,17] and it was rotated 4 times. 

def findMin(nums):
  """
  :type nums: List[int]
  :rtype: int
  """

print(findMin(nums1))
print(findMin(nums2))
print(findMin(nums3))