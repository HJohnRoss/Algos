/**
 * @param {number[]} nums
 * @return {number}
 * 
 * Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
 * 
 * There is only one repeated number in nums, return this repeated number.
 * 
 * You must solve the problem without modifying the array nums and uses only constant extra space.
 * 
 * https://leetcode.com/problems/find-the-duplicate-number/
 * solution: https://youtu.be/wjYnzkAhcNk
 */

const nums1 = [1,3,4,2,2]
const Output1 = 2

const nums2 = [3,1,3,4,2]
const Output2 = 3

var findDuplicate = function(nums, curr = 0) {
  if(curr === nums[curr]) {
    return curr
  }

  let next = nums[curr]
  nums[curr] = curr
  return findDuplicate(nums, next)
};

console.log(findDuplicate(nums1))
console.log(findDuplicate(nums2))