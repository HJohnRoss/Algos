/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 * 
 * You are given a string s and an integer k. You can choose any character of the string and change it to any
 * other uppercase English character. 
 * 
 * You can perform this operation at most k times.
 * 
 * Return the length of the longest substring containing the same letter you can get after performing the above operations.
 * 
 * https://leetcode.com/problems/longest-repeating-character-replacement/
 * solution: https://youtu.be/gqXU1UyA8pk
 */
const s1 = "ABAB"
const k1 = 2
const expected1 = 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.

const s2 = "AABABBA"
const k2 = 1
const expected2 = 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.

var characterReplacement = function(s, k) {
  let count = {}
  let res = 0
  let l = 0

  for(let r = 0; r < s.length; r++) {
    if(count[s[r]]) {
      count[s[r]] += 1
    } else {
      count[s[r]] = 0
    }

    while((r - l + 1) - Math.max(count.values()) > k) {
      count[s[l]] -= 1
      l += 1
    }

    res = Math.max(res, r - l + 1)
  }
  return res
};

console.log(characterReplacement(s1, k1))
console.log(characterReplacement(s2, k2))