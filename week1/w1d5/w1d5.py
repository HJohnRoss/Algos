 #* @param {string} s
 #* @return {boolean}
 #* 
 #* A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads
 #* the same forward and backward. Alphanumeric characters include letters and numbers.
 #* 
 #* Given a string s, return True if it is a palindrome, or false otherwise.
 #* 
 #* https://leetcode.com/problems/valid-palindrome/
 #* Faster Solution (probably): https://youtu.be/jJXJ16kPFWg
 

s1 = "A man, a plan, a canal: Panama"
expected1 = True
# Explanation: "amanaplanacanalpanama" is a palindrome.

s2 = "race a car"
expected2 = False
# Explanation: "raceacar" is not a palindrome.

s3 = " "
expected3 = True
# Explanation: s is an empty string "" after removing non-alphanumeric characters.
# Since an empty string reads the same forward and backward, it is a palindrome.

def isPalindrome(s):
  """
  :type s: str
  :rtype: bool
  """

print(isPalindrome(s1))
print(isPalindrome(s2))
print(isPalindrome(s3))