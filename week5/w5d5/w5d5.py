#  * @param {number[]} nums
#  * @return {number}
#  * 
#  * Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
#  * 
#  * You must write an algorithm that runs in O(n) time.

nums1 = [100,4,200,1,3,2]
Output1 = 4
# Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

nums2 = [0,3,7,2,5,8,4,6,0,1]
Output2 = 9

def longestConsecutive(nums):
  """
  :type nums: List[int]
  :rtype: int
  """

print(longestConsecutive(nums1))
print(longestConsecutive(nums2))