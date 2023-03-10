# * @param {string} s
# * @return {boolean}
# * 
# * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
# * 
# * 
# * An input string is valid if:
# * 
# * Open brackets must be closed by the same type of brackets.
# * Open brackets must be closed in the correct order.
# * Every close bracket has a corresponding open bracket of the same type.4
# * 
# * https://leetcode.com/problems/valid-parentheses/
# * solution: https://youtu.be/WTzjTskDFMg

# tip: try to use a stack to store data

s1 = "()"
expected1 = True

s2 = "()[]{}"
expected2 = True

s3 = "(]"
expected3 = False

s4 = "{[]}"
expected4 = True

def isValid(s):
  stack = []
  pairs = {")": "(", "]": "[", "}": "{"}
  for letter in s:
    if letter in pairs and stack:
      popped = stack.pop()
      if popped != pairs[letter]:
        return False
    else:
      stack.append(letter)
  if len(stack) > 0:
    return False
  return True

print(isValid(s1))
print(isValid(s2))
print(isValid(s3))
print(isValid(s4))