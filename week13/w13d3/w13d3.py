#* @param {number[]} nums
# * @return {number[][]}
# * 
# * Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
# * 
# * https://leetcode.com/problems/permutations/
# * solution: https://youtu.be/s7AvT7cGdSo

nums1 = [1,2,3]
expected1 = [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

nums2 = [0,1]
expected2 = [[0,1],[1,0]]

nums3 = [1]
expected3 = [[1]]

def permute(nums):
  """
  :type nums: List[int]
  :rtype: List[List[int]]
  """

print(permute(nums1))
print(permute(nums2))
print(permute(nums3))