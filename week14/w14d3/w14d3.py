# * @param {character[][]} board
# * @param {string} word
# * @return {boolean}
# * 
# * Given an m x n grid of characters board and a string word, return true if word exists in the grid.
# * 
# * The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.'
# * 
# * https://leetcode.com/problems/word-search/
# * solution: https://youtu.be/pfiQ_PS1g8E

board1 = [
  ["A","B","C","E"],
  ["S","F","C","S"],
  ["A","D","E","E"]
  ]
word1 = "ABCCED"
expected1 = True


board2 = [
  ["A","B","C","E"],
  ["S","F","C","S"],
  ["A","D","E","E"]
  ]
word2 = "SEE"
expected2 = True


board3 = [
  ["A","B","C","E"],
  ["S","F","C","S"],
  ["A","D","E","E"]
  ]
word3 = "ABCB"
expected3 = False

def exist(board, word):
  """
  :type board: List[List[str]]
  :type word: str
  :rtype: bool
  """

print(exist(board1, word1))
print(exist(board2, word2))
print(exist(board2, word2))