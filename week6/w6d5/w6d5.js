/**
 * @param {number} n
 * @return {string[]}
 * 
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 * 
 * https://leetcode.com/problems/generate-parentheses/
 * solution: https://youtu.be/s9fokUqJ76A
 */

const n1 = 3
const expected1 = ["((()))", "(()())", "(())()", "()(())", "()()()"]

const n2 = 1
const expected2 = ["()"]

var generateParenthesis = function (n, res = [], openN = 0, closedN = 0, stack = []) {

  if (openN === closedN == (n * 2)) {
    res.push(stack.join(""))

    return res;
  }

  if (openN < n) {
    backtrackOpen(n, openN, closedN, stack, res)
  }

  if (closedN < openN) {
    backtrackClosed(n, openN, closedN, stack, res)
  }

  return res
};

const backtrackOpen = (n, openN, closedN, stack, res) => {
  stack.push("(")
  generateParenthesis(n, res, openN + 1, closedN, stack)
  stack.pop()
}

const backtrackClosed = (n, openN, closedN, stack, res) => {
  stack.push(")")
  generateParenthesis(n, res, openN, closedN + 1, stack)
  stack.pop()
}

console.log(generateParenthesis(n1))
console.log(generateParenthesis(n2))