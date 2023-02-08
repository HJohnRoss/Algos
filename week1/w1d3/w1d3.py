# * Question: valid-anagram
# * @param {string} s
# * @param {string} t
# * @return {boolean}
# * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
# * 
# * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly
# * once.
# https://leetcode.com/problems/valid-anagram/description/
# Answer: https://www.youtube.com/watch?v=9UtInBqnCgA&ab_channel=NeetCode

s1 = "anagram"
t1 = "nagaram"
result1 = True

s2 = "rat"
t2 = "car"
result2 = False

def isAnagram(s, t):
  obj = {}
  for l in s:
    if l in obj:
      obj[l] += 1
    else:
      obj[l] = 1
  for l in t:
    if l in obj:
      obj[l] -= 1
    else:
      return False
  for l in obj:
    if obj[l] != 0:
      return False
  return True

# print(isAnagram(s1, t1))
# print(isAnagram(s2, t2))



# * Question: Two Sum
# * @param {number[]} nums
# * @param {number} target
# * @return {number[]}
# * 
# * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
# * 
# * You may assume that each input would have exactly one solution, and you may not use the same element twice.
# * 
# * You can return the answer in any order.
# * https://leetcode.com/problems/two-sum/
# * Answer: https://www.youtube.com/watch?v=KLlXCFG5TnA&ab_channel=NeetCode

def twoSum(nums, target):
  count = -1
  for num in nums:
    count += 1
    i = count + 1
    while i < len(nums):
      if nums[i] + num == target:
        return [count, i]
      i += 1


nums1 = [2,7,11,15]
target1 = 9
expected1 = [0,1]
# Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

nums2 = [3,2,4]
target2 = 6
expected2 = [1,2]

nums3 = [3,3]
target3 = 6
expected3 = [0,1]

print(twoSum(nums1, target1))
print(twoSum(nums2, target2))
print(twoSum(nums3, target3))