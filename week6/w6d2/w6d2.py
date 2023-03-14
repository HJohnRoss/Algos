#  * @param {number[]} nums
#  * @return {number[][]}
#  * 
#  * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j]
#  * + nums[k] == 0.
#  * 
#  * Notice that the solution set must not contain duplicate triplets.
#  * 
#  * https://leetcode.com/problems/3sum/
#  * solution: https://youtu.be/cQ1Oz4ckceM

nums1 = [-1,0,1,2,-1,-4]
expected1 = [[-1,-1,2],[-1,0,1]]
# Explanation: 
# nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
# nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
# nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
# The distinct triplets are [-1,0,1] and [-1,-1,2].
# Notice that the order of the output and the order of the triplets does not matter.

nums2 = [0,1,1]
expected2 = []
# Explanation: The only possible triplet does not sum up to 0.

nums3 = [0,0,0]
expected3 = [[0,0,0]]
# Explanation: The only possible triplet sums up to 0.
def threeSum(nums):
  """
  :type nums: List[int]
  :rtype: List[List[int]]
  """

print(threeSum(nums1))
print(threeSum(nums2))
print(threeSum(nums3))