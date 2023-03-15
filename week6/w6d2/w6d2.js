/**
 * @param {number[]} nums
 * @return {number[][]}
 * 
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j]
 * + nums[k] == 0.
 * 
 * Notice that the solution set must not contain duplicate triplets.
 * 
 * https://leetcode.com/problems/3sum/
 * solution: https://youtu.be/cQ1Oz4ckceM
 */

const nums1 = [-1, 0, 1, 2, -1, -4]
const expected1 = [[-1, -1, 2], [-1, 0, 1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

const nums2 = [0, 1, 1]
const expected2 = []
// Explanation: The only possible triplet does not sum up to 0.

const nums3 = [0, 0, 0]
const expected3 = [[0, 0, 0]]
// Explanation: The only possible triplet sums up to 0.
// var threeSum = function (nums) {
//   let left = 0
//   let middle = Math.floor(nums.length / 2)
//   let right = nums.length - 1
//   let results = []

//   console.log(nums)
//   while (left !== middle || middle !== right || left < 0 || right > nums.length - 1) {
//     let target = nums[left] + nums[middle] + nums[right]
//     if (target === 0) {
//       results.push(nums[left], nums[middle], nums[right])
//       if (left + 1 === middle) {
//         middle++
//       } else if (right - 1 === middle) {
//         middle--
//       } else {
//         left++
//       }
//     } else {
//       if (left + 1 === middle && target < 0) {
//         middle++
//       } else if (right - 1 === middle && target > 0) {
//         middle--
//       } else if (target > 0) {
//         left++
//       } else {
//         right--
//       }
//     }
//   }
//   return results
// };

const threeSum = (nums) => {
  const res = []
  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      break
    }
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }

    let left = i + 1
    let right = nums.length - 1
    while (left < right) {
      const target = nums[i] + nums[left] + nums[right]
      if (target > 0) {
        right--
      } else if (target < 0) {
        left++
      } else {
        res.push([nums[i], nums[left], nums[right]])
        left++
        right--
        while (nums[left] === nums[left - 1] && left < right) {
          left++
        }
      }
    }
  }
  return res
}

console.log(threeSum(nums1))
console.log(threeSum(nums2))
console.log(threeSum(nums3))