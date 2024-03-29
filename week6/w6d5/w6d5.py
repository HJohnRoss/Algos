#  * @param {number} n
#  * @return {string[]}
#  * 
#  * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
#  * 
#  * https://leetcode.com/problems/generate-parentheses/
#  * solution: https://youtu.be/s9fokUqJ76A

n1 = 3
expected1 = ["((()))","(()())","(())()","()(())","()()()"]

n2 = 1
expected2 = ["()"]

def generateParenthesis(n):
  stack = []
  res = []

  def backtrack(openN, closedN):
      if openN == closedN == n:
          res.append("".join(stack))
          return

      if openN < n:
          stack.append("(")
          backtrack(openN + 1, closedN)
          stack.pop()
      if closedN < openN:
          stack.append(")")
          backtrack(openN, closedN + 1)
          stack.pop()

  backtrack(0, 0)
  return res

print(generateParenthesis(n1))
print(generateParenthesis(n2))