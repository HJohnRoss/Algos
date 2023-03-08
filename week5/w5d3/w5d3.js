/**
 * @param {number[]} nums
 * @return {number[]}
 * 
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
 * 
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 * 
 * You must write an algorithm that runs in O(n) time and without using the division operation.
 * 
 * https://leetcode.com/problems/product-of-array-except-self/
 * solution: https://youtu.be/bNvIQI2wAjk
 */

const nums1 = [1,2,3,4]
const Output1 = [24,12,8,6]

const nums2 = [-1,1,0,-3,3]
const Output2 = [0,0,9,0,0]

var productExceptSelf = function (nums) {

};

console.log(productExceptSelf(nums1))
console.log(productExceptSelf(nums2))