# * @param {number[]} nums
# * @return {number}
# * 
# * Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
# * 
# * There is only one repeated number in nums, return this repeated number.
# * 
# * You must solve the problem without modifying the array nums and uses only constant extra space.
# * 
# * https://leetcode.com/problems/find-the-duplicate-number/
# * solution: https://youtu.be/wjYnzkAhcNk

nums1 = [1,3,4,2,2]
Output1 = 2

nums2 = [3,1,3,4,2]
Output2 = 3

def findDuplicate(nums):
  """
  :type nums: List[int]
  :rtype: int
  """

print(findDuplicate(nums1))
print(findDuplicate(nums2))