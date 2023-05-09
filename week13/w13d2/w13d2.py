# * @param {number[]} candidates
# * @param {number} target
# * @return {number[][]}
# * 
# * Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the
# * chosen numbers sum to target. You may return the combinations in any order.
# * 
# * The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the 
# * frequency of at least one of the chosen numbers is different.
# * 
# * The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.
# * 
# * https://leetcode.com/problems/combination-sum/
# * solution: https://youtu.be/GBKI9VSKdGg

candidates1 = [2, 3, 6, 7]
target1 = 7
expected1 = [[2, 2, 3], [7]]
# Explanation:
# 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
# 7 is a candidate, and 7 = 7.
# These are the only two combinations.

candidates2 = [2, 3, 5]
target2 = 8
expected2 = [[2, 2, 2, 2], [2, 3, 3], [3, 5]]

candidates3 = [2]
target3 = 1
expected3 = []

def combinationSum(candidates, target):
  res = []

  def dfs(i, cur, total):
    if total == target:
      res.append(cur.copy())
      return
    if i >= len(candidates) or total > target:
      return

    cur.append(candidates[i])
    dfs(i, cur, total + candidates[i])
    cur.pop()
    dfs(i + 1, cur, total)

  dfs(0, [], 0)
  return res

print(combinationSum(candidates1, target1))
print(combinationSum(candidates2, target2))
print(combinationSum(candidates3, target3))