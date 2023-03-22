/**
 * @param {string[]} tokens
 * @return {number}
 * 
 * You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation. https://en.wikipedia.org/wiki/Reverse_Polish_notation
 * 
 * Evaluate the expression. Return an integer that represents the value of the expression.
 * 
 * Note that:
 * The valid operators are '+', '-', '*', and '/'.
 * Each operand may be an integer or another expression.
 * The division between two integers always truncates toward zero.
 * There will not be any division by zero.
 * The input represents a valid arithmetic expression in a reverse polish notation.
 * The answer and all the intermediate calculations can be represented in a 32-bit integer.
 * 
 * solution: https://youtu.be/iu0082c4HDE
 * https://leetcode.com/problems/evaluate-reverse-polish-notation/
 */

const tokens1 = ["2", "1", "+", "3", "*"]
const expected1 = 9
// Explanation: ((2 + 1) * 3) = 9

const tokens2 = ["4", "13", "5", "/", "+"]
const expected2 = 6
// Explanation: (4 + (13 / 5)) = 6

const tokens3 = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
const expected3 = 22
// Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
// = ((10 * (6 / (12 * -11))) + 17) + 5
// = ((10 * (6 / -132)) + 17) + 5
// = ((10 * 0) + 17) + 5
// = (0 + 17) + 5
// = 17 + 5
// = 22

var evalRPN = function (tokens) {
  let stack = []

  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i] === "*" || tokens[i] === "/" || tokens[i] === "+" || tokens[i] === "-") {
      const val = calculate(parseInt(stack.pop()), parseInt(stack.pop()), tokens[i])

      stack.push(parseInt(val))
    } else {
      stack.push(tokens[i])
    }
  }
  return stack.pop()
};

const calculate = (val1, val2, opp) => {
  if (opp === "*") {
    return val2 * val1
  } else if (opp === "/") {
    return val2 / val1
  } else if (opp === "+") {
    return val2 + val1
  } else {
    return val2 - val1
  }
}

console.log(evalRPN(tokens1))
console.log(evalRPN(tokens2))
console.log(evalRPN(tokens3))