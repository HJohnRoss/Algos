/**
 * @param {string} s
 * @return {number}
 * 
 * Given a string s, find the length of the longest substring without repeating characters.
 * 
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * solution: https://youtu.be/wiGpQwVHdE0
 */

const s1 = "abcabcbb"
const Output1 = 3
// Explanation: The answer is "abc", with the length of 3.

const s2 = "bbbbb"
const Output2 = 1
// Explanation: The answer is "b", with the length of 1.

const s3 = "pwwkew"
const Output3 = 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

var lengthOfLongestSubstring1 = function (s) {
  let count = 0
  let res = 0
  let obj = {}

  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]]) {
      if (res < count) {
        res = count
      }
      count = 0
      obj = {}
    }
    obj[s[i]] = true
    count++
  }

  if (count > res) {
    return count
  }
  return res
};

var lengthOfLongestSubstring = function (s) {
  const set = new Set();
  let l = 0;
  let max = 0;

  for (let r = 0; r < s.length; r++) {
      while (set.has(s[r])) {
          set.delete(s[l]);
          l++;
      }
      set.add(s[r]);
      max = Math.max(max, set.size);
  }
  return max;
};

console.log(lengthOfLongestSubstring(s1))
console.log(lengthOfLongestSubstring(s2))
console.log(lengthOfLongestSubstring(s3))