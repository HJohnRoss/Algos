/**
 * @param {number[]} nums
 * @return {number}
 * 
 * Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
 * 
 * You must write an algorithm that runs in O(n) time.
 * 
 * https://leetcode.com/problems/longest-consecutive-sequence/
 * solution: https://youtu.be/P6RZZMu_maU
 */

const nums1 = [100, 4, 200, 1, 3, 2]
const Output1 = 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

const nums2 = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]
const Output2 = 9

var longestConsecutive = function (nums, maxScore = 0) {
  const numSet = new Set(nums);

  for (const num of numSet) {
    const prev = num - 1
    if (numSet.has(prev)) {
      continue
    }

    let [curr, score] = [num, 1]

    const isOrder = () => numSet.has(curr + 1)
    while (isOrder()) {
      curr++
      score++
    }

    // maxScore = Math.max(maxScore, score)
    if(score > maxScore) {
      maxScore = score
    }
  }

  return maxScore
};

console.log(longestConsecutive(nums1))
console.log(longestConsecutive(nums2))