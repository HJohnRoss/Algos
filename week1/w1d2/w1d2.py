# * @param {string} s
# * @param {string[]} wordDict
# * @return {boolean}
# * 
# * Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.
# *
# * Note that the same word in the dictionary may be reused multiple times in the segmentation.
# * 
# * https://leetcode.com/problems/word-break/
# * test your code here^

s1 = "leetcode"
wordDict1 = ["leet", "code"]
expected1 = True
# Explanation: Return true because "leetcode" can be segmented as "leet code".

s2 = "applepenapple"
wordDict2 = ["apple", "pen"]
expected2 = True
# Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
# Note that you are allowed to reuse a dictionary word.

s3 = "catsandog"
wordDict3 = ["cats", "dog", "sand", "and", "cat"]
expected3 = False

def wordBreakLVL1(s, wordDict):
  """
  :type s: str
  :type wordDict: List[str]
  :rtype: bool
  """

print(wordBreakLVL1(s1, wordDict1))
print(wordBreakLVL1(s2, wordDict2))
print(wordBreakLVL1(s3, wordDict3))