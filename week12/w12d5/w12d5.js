/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 * 
 * Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
 * 
 * In other words, return true if one of s1's permutations is the substring of s2.
 * 
 * https://leetcode.com/problems/permutation-in-string/
 * solution: https://youtu.be/UbyhOgBN834
 */

const s11 = "ab"
const s21 = "eidbaooo"
const expected1 = true
// Explanation: s2 contains one permutation of s1 ("ba").

const s12 = "ab"
const s22 = "eidboaoo"
const expected2 = false

var checkInclusion = function (s1, s2) {
  let s1chars = {}
  for (let i = 0; i < s1.length; i++) {
    if (!s1chars[s1[i]]) {
      s1chars[s1[i]] = 0
    }
    s1chars[s1[i]]++
  }

  let i = 0
  let last = s2.length - s1.length

  while (i <= last) {
    while (i <= last && !(s2[i] in s1chars)) {
      i++
    }

    if (i > last) {
      return false
    }

    const subChars = {}
    let j = i
    while (j < s2.length && s2[j] in s1chars) {
      let ch = s2[j]

      if (!subChars[ch]) {
        subChars[ch] = 0
      }
      subChars[ch]++

      if (subChars[ch] > s1chars[ch]) {
        break
      }

      j++
    }

    if (s1.length === j - i) {
      return true
    }

    if (j < s2.length !== s2[j]) {
      while (s2[i] !== s2[j]) {
        i++
      }
      i++
    } else {
      i = j
    }
  }

  return false
};

console.log(checkInclusion(s11, s21))
console.log(checkInclusion(s12, s22))