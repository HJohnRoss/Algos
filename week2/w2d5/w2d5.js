/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 
 * Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target
 * exists, then return its index. Otherwise, return -1.
 * 
 * You must write an algorithm with O(log n) runtime complexity.
 * 
 * https://leetcode.com/problems/binary-search/\
 * solution: https://youtu.be/s4DPM8ct1pI
 */

const nums1 = [-1,0,3,5,9,12]
const target1 = 9
const expected1 = 4
// Explanation: 9 exists in nums and its index is 4

const nums2 = [-1,0,3,5,9,12]
const target2 = 2
const expected2 = -1
// Explanation: 2 does not exist in nums so return -1

var search = function (nums, target) {

};

console.log(search(nums1, target1))
console.log(search(nums2, target2))