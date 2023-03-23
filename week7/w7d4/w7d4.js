/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * 
 * https://www.geeksforgeeks.org/binary-search/
 * 
 * You are given an m x n integer matrix matrix with the following two properties:
 * - Each row is sorted in non-decreasing order.
 * - The first integer of each row is greater than the last integer of the previous row.
 * 
 * Given an integer target, return true if target is in matrix or false otherwise.
 * You must write a solution in O(log(m * n)) time complexity.
 * 
 * https://leetcode.com/problems/search-a-2d-matrix/
 * solution: https://youtu.be/Ber2pi2C0j0
 */

const matrix1 = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]]
const target1 = 3
const expected1 = true


const matrix2 = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]]
const target2 = 13
const expected2 = false

var searchMatrix = function (matrix, target) {
  let left = 0
  let right = matrix.length - 1

  while (left <= right) {
    for (let i = 0; i < matrix[left].length; i++) {
      if (matrix[left][i] > target) {
        return true
      }
    }

    for (let i = 0; i < matrix[right].length; i++) {
      if (matrix[right][i] < target) {
        return true
      }
    }

    left++
    right--
  }
  return false
};

const searchMatrix1 = (matrix, target) => {
  let rows = matrix.length
  let cols = matrix[0].length

  let top = 0
  let bot = rows - 1

  while (top <= bot) {
    let row = Math.floor((top + bot) / 2)
    if (target > matrix[row][cols - 1]) {
      top = row + 1
    } else if (target < matrix[row][0]) {
      bot = row - 1
    } else {
      break
    }
  }

  if (!(top <= bot)) {
    return false;
  }

  let row = Math.floor((top + bot) / 2)
  let left = 0
  let right = cols - 1
  while (left <= right) {
    let middle = Math.floor((left + right) / 2)
    if (target > matrix[row][middle]) {
      left = middle + 1
    } else if (target < matrix[row][middle]) {
      right = middle - 1
    } else {
      return true
    }
  }

  return false
}

console.log(searchMatrix1(matrix1, target1))
console.log(searchMatrix1(matrix2, target2))