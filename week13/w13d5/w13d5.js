/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * 
 * Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.
 * 
 * Each number in candidates may only be used once in the combination.
 * 
 * Note: The solution set must not contain duplicate combinations.
 * 
 * https://leetcode.com/problems/combination-sum-ii/
 * solution: https://youtu.be/rSA3t6BDDwg
 */

const candidates1 = [10, 1, 2, 7, 6, 1, 5]
const target1 = 8
const expected1 = [
  [1, 1, 6],
  [1, 2, 5],
  [1, 7],
  [2, 6]
]

const candidates2 = [2, 5, 2, 1, 2]
const target2 = 5
const expected2 = [
  [1, 2, 2],
  [5]
]

var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b)
  return dfs(candidates, target)
};

const dfs = (candidates, target, index = 0, set = [], subset = []) => {
  if (target < 0) {
    return subset
  }

  if (target === 0) {
    if (set.length) {
      subset.push(set.slice())
    }
  }

  for (let i = index; i < candidates.length; i++) {
    if (index < i && candidates[i - 1] === candidates[i]) {
      continue
    }

    backTrack(candidates, target, i, set, subset)
  }

  return subset
}

const backTrack = (candidates, target, i, set, subset) => {
  set.push(candidates[i])
  dfs(candidates, (target - candidates[i]), (i + 1), set, subset)
  set.pop()
}

console.log(combinationSum2(candidates1, target1))
console.log(combinationSum2(candidates2, target2))