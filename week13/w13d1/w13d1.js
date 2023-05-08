/**
 * @param {number[]} nums
 * @return {number[][]}
 * 
 * Given an integer array nums of unique elements, return all possible subsets (the power set).
 * 
 * The solution set must not contain duplicate subsets. Return the solution in any order.
 * 
 * https://leetcode.com/problems/subsets/
 * solution: https://youtu.be/REOH22Xwdkk
 */

const nums1 = [1, 2, 3]
const expected1 = [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

const nums2 = [0]
const expected2 = [[], [0]]

var subsets = function (nums) {
  nums.sort((a, b) => a - b)

  return bfs(nums)
};

const bfs = (nums, subsets = [[]]) => {
  for(let num of nums) {
    const levels = subsets.length
    for(let i = 0; i < levels; i++) {
      const nextLvl = [...subsets[i], num]

      subsets.push(nextLvl)
    }
  }
  return subsets
}

console.log(subsets(nums1))
console.log(subsets(nums2))