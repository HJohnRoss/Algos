# * @param {number[][]} matrix
# * @param {number} target
# * @return {boolean}
# * 
# * https://www.geeksforgeeks.org/binary-search/
# *
# * You are given an m x n integer matrix matrix with the following two properties:
# * - Each row is sorted in non-decreasing order.
# * - The first integer of each row is greater than the last integer of the previous row.
# * 
# * Given an integer target, return true if target is in matrix or false otherwise.
# * You must write a solution in O(log(m * n)) time complexity.
# * 
# * https://leetcode.com/problems/search-a-2d-matrix/
# * solution: https://youtu.be/Ber2pi2C0j0


matrix1 = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]
target1 = 3
expected1 = True


matrix2 = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]
target2 = 13
expected2 = False

def searchMatrix(matrix, target):
  """
  :type matrix: List[List[int]]
  :type target: int
  :rtype: bool
  """

print(searchMatrix(matrix1, target1))
print(searchMatrix(matrix2, target2))