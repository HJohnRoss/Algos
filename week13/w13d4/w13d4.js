/**
 * @param {number[]} nums
 * @return {number[][]}
 * 
 * Given an integer array nums that may contain duplicates, return all possible subsets (the power set).
 * 
 * The solution set must not contain duplicate subsets. Return the solution in any order.
 * 
 * https://leetcode.com/problems/subsets-ii/
 * solution: https://youtu.be/Vn2v6ajA7U0
 */

const nums1 = [1,2,2]
const expected1 = [[],[1],[1,2],[1,2,2],[2],[2,2]]

const nums2 = [0]
const expected2 = [[],[0]]

var subsetsWithDup = function(nums, index = 0, sub = [], subset = []) {
  nums.sort((a, b) => a - b)
  
  return dfs(nums, index, sub, subset)
};

const dfs = (nums, index, sub, subset) => {
  subset.push(sub.slice())

  for(let i = index; i < nums.length; i++) {
    if(nums[i - 1] === nums[i] && index < i) {
      continue
    }
    pushSubset(nums, i, sub, subset)
  }

  return subset
}

const pushSubset = (nums, i, sub, subset) => {
  sub.push(nums[i])
  dfs(nums, (i + 1), sub, subset)
  sub.pop()
}

console.log(subsetsWithDup(nums1))
console.log(subsetsWithDup(nums2))