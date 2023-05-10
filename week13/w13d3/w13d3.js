/**
 * @param {number[]} nums
 * @return {number[][]}
 * 
 * Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
 * 
 * https://leetcode.com/problems/permutations/
 * solution: https://youtu.be/s7AvT7cGdSo
 */

const nums1 = [1, 2, 3]
const expected1 = [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]

const nums2 = [0, 1]
const expected2 = [[0, 1], [1, 0]]

const nums3 = [1]
const expected3 = [[1]]

var permute = function (nums) {

  return dfs(nums)
};

const dfs = (nums, permutation = [], permutations = []) => {
  if (nums.length === permutation.length) {
    return permutations.push(permutation.slice())
  }

  for (let i = 0; i < nums.length; i++) {
    if (permutation.includes(nums[i])) {
      continue
    }
    backTrack(nums, i, permutation, permutations)
  }

  return permutations
}

const backTrack = (nums, i, permutation, permutations) => {
  permutation.push(nums[i])
  dfs(nums, permutation, permutations)
  permutation.pop()
}



console.log(permute(nums1))
console.log(permute(nums2))
console.log(permute(nums3))