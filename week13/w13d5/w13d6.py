# * @param {number[]} candidates
# * @param {number} target
# * @return {number[][]}
# * 
# * Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.
# * 
# * Each number in candidates may only be used once in the combination.
# * 
# * Note: The solution set must not contain duplicate combinations.
# * 
# * https://leetcode.com/problems/combination-sum-ii/
# * solution: https://youtu.be/rSA3t6BDDwg

candidates1 = [10,1,2,7,6,1,5]
target1 = 8
expected1 = [
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]

candidates2 = [2,5,2,1,2]
target2 = 5
expected2 = [
[1,2,2],
[5]
]

def combinationSum2(candidates, target):
  """
  :type candidates: List[int]
  :type target: int
  :rtype: List[List[int]]
  """

print(combinationSum2(candidates1, target1))
print(combinationSum2(candidates2, target2))