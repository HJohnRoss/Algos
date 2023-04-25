# * @param {string} s
# * @return {number}
# * 
# * Given a string s, find the length of the longest substring without repeating characters.
# * 
# * https://leetcode.com/problems/longest-substring-without-repeating-characters/
# * solution: https://youtu.be/wiGpQwVHdE0

s1 = "abcabcbb"
Output1 = 3
# Explanation: The answer is "abc", with the length of 3.

s2 = "bbbbb"
Output2 = 1
# Explanation: The answer is "b", with the length of 1.

s3 = "pwwkew"
Output3 = 3
# Explanation: The answer is "wke", with the length of 3.
# Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

def lengthOfLongestSubstring(s):
  """
  :type s: str
  :rtype: int
  """

print(lengthOfLongestSubstring(s1))
print(lengthOfLongestSubstring(s2))
print(lengthOfLongestSubstring(s3))