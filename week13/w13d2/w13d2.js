/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * 
 * Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the
 * chosen numbers sum to target. You may return the combinations in any order.
 * 
 * The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the 
 * frequency of at least one of the chosen numbers is different.
 * 
 * The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.
 * 
 * https://leetcode.com/problems/combination-sum/
 * solution: https://youtu.be/GBKI9VSKdGg
 */

const candidates1 = [2, 3, 6, 7]
const target1 = 7
const expected1 = [[2, 2, 3], [7]]
// Explanation:
// 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
// 7 is a candidate, and 7 = 7.
// These are the only two combinations.

const candidates2 = [2, 3, 5]
const target2 = 8
const expected2 = [[2, 2, 2, 2], [2, 3, 3], [3, 5]]

const candidates3 = [2]
const target3 = 1
const expected3 = []

var combinationSum = function (candidates, target, index = 0, combination = [], combinations = []) {
  if (target < 0) {
    return combinations
  }

  if (target === 0) {
    return combinations.push(combination.slice())
  }

  for (let i = index; i < candidates.length; i++) {
    backTrack(candidates, target, i, combination, combinations)
  }
  return combinations
};

const backTrack = (candidates, target, i, combination, combinations) => {
  combination.push(candidates[i])
  combinationSum(candidates, (target - candidates[i]), i, combination, combinations);
  combination.pop();
}

console.log(combinationSum(candidates1, target1))
console.log(combinationSum(candidates2, target2))
console.log(combinationSum(candidates3, target3))