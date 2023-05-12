# * @param {number[]} nums
# * @return {number[][]}
# * 
# * Given an integer array nums that may contain duplicates, return all possible subsets (the power set).
# * 
# * The solution set must not contain duplicate subsets. Return the solution in any order.
# * 
# * Subset definition: A subset of an array is a selection of elements (possibly none) of the array
# * 
# * https://leetcode.com/problems/subsets-ii/
# * solution: https://youtu.be/Vn2v6ajA7U0

nums1 = [1,2,2]
expected1 = [[],[1],[1,2],[1,2,2],[2],[2,2]]

nums2 = [0]
expected2 = [[],[0]]

def subsetsWithDup(nums):
  """
  :type nums: List[int]
  :rtype: List[List[int]]
  """

print(subsetsWithDup(nums1))
print(subsetsWithDup(nums2))