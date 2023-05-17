/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 * 
 * Given an m x n grid of characters board and a string word, return true if word exists in the grid.
 * 
 * The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.'
 * 
 * https://leetcode.com/problems/word-search/
 * solution: https://youtu.be/pfiQ_PS1g8E
 */

const board1 = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"]
]
const word1 = "ABCCED"
const expected1 = true


const board2 = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"]
]
const word2 = "SEE"
const expected2 = true


const board3 = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"]
]
const word3 = "ABCB"
const expected3 = false

var exist = function (board, word) {

};

console.log(exist(board1, word1))
console.log(exist(board2, word2))
console.log(exist(board2, word2))