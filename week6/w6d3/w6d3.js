/**
 * @param {number[]} height
 * @return {number}
 * You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
 * 
 * Find two lines that together with the x-axis form a container, such that the container contains the most water.
 * 
 * Return the maximum amount of water a container can store.
 * 
 * Notice that you may not slant the container.
 * 
 * solution: https://youtu.be/UuiTKBwPgAo
 * https://leetcode.com/problems/container-with-most-water/
 */

const height1 = [1,8,6,2,5,4,8,3,7]
const Output1 = 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

const height2 = [1,1]
const Output2 = 1
var maxArea = function(height) {
    
};

console.log(maxArea(height1))
console.log(maxArea(height2))