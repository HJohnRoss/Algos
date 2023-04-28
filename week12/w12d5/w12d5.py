# * @param {string} s1
# * @param {string} s2
# * @return {boolean}
# * 
# * Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
# * 
# * In other words, return true if one of s1's permutations is the substring of s2.
# * 
# * https://leetcode.com/problems/permutation-in-string/
# * solution: https://youtu.be/UbyhOgBN834

s11 = "ab"
s21 = "eidbaooo"
expected1 = True
# Explanation: s2 contains one permutation of s1 ("ba").

s12 = "ab"
s22 = "eidboaoo"
expected2 = False

def checkInclusion(s1, s2):
  """
  :type s1: str
  :type s2: str
  :rtype: bool
  """

print(checkInclusion(s11, s21))
print(checkInclusion(s12, s22))