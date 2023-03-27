/**
 * @param {number[]} nums
 * @return {number}
 * 
 * Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:
 * - [4,5,6,7,0,1,2] if it was rotated 4 times.
 * - [0,1,2,4,5,6,7] if it was rotated 7 times.
 * 
 * Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
 * 
 * Given the sorted rotated array nums of unique elements, return the minimum element of this array.
 * 
 * You must write an algorithm that runs in O(log n) time.
 * 
 * https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
 * solution: https://youtu.be/U8XENwh8Oy8
 */

const nums1 = [3,4,5,1,2]
const expected1 = 1
// Explanation: The original array was [1,2,3,4,5] rotated 3 times.

const nums2 = [4,5,6,7,0,1,2]
const expected2 = 0
// Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.

const nums3 = [11,13,15,17]
const expected3 = 11
// Explanation: The original array was [11,13,15,17] and it was rotated 4 times. 

const nums4 = [2,1]

var findMin = function(nums) {
  let pointer = Math.floor((nums.length - 1) / 2)
  let min = nums[pointer]
  
  while(pointer >= 0 && pointer <= nums.length - 1) {
    if(min > nums[pointer]) {
      min = nums[pointer]
      let breakPoint
      let prev = pointer
      if(pointer === 0) {
        breakPoint = nums.length - 1
        pointer = nums.length - 1
      } else {
        breakPoint = pointer - 1
        pointer--
      }
      if(nums[breakPoint] > nums[prev]) {
        break
      }
    } else {
      if(pointer === 0) {
        pointer = nums.length - 1
      } else {
        pointer--
      }
    }
  }
  return min
};

console.log(findMin(nums1))
console.log(findMin(nums2))
console.log(findMin(nums3))
console.log(findMin(nums4))