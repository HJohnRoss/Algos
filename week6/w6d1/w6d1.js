/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 * 
 * Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific
 * target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
 * 
 * Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
 * The tests are generated such that there is exactly one solution. You may not use the same element twice.
 * 
 * Your solution must use only constant extra space.
 * 
 * solution: https://youtu.be/cQ1Oz4ckceM
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 */
const numbers1 = [2,7,11,15]
const target1 = 9
const expected1 = [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

const numbers2 = [2,3,4]
const target2 = 6
const expected2 = [1,3]
// Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].

const numbers3 = [-1,0]
const target3 = -1
const expected3 = [1,2]
// Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].

var twoSum = function(numbers, target) {
    
};

console.log(twoSum(numbers1, target1))
console.log(twoSum(numbers2, target2))
console.log(twoSum(numbers3, target3))