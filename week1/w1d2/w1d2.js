/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 * 
 * Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.
 *
 * Note that the same word in the dictionary may be reused multiple times in the segmentation.
 * 
 * https://leetcode.com/problems/word-break/
 * test your code here^
 */
const s1 = "leetcode"
const wordDict1 = ["leet", "code"]
const expected1 = true
// Explanation: Return true because "leetcode" can be segmented as "leet code".

const s2 = "applepenapple"
const wordDict2 = ["apple", "pen"]
const expected2 = true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.

const s3 = "catsandog"
const wordDict3 = ["cats", "dog", "sand", "and", "cat"]
const expected3 = false

const wordBreakLVL1 = (s, wordDict) => {
};

console.log(wordBreakLVL1(s1, wordDict1))
console.log(wordBreakLVL1(s2, wordDict2))
console.log(wordBreakLVL1(s3, wordDict3))


/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 *
 * Given a string s and a dictionary of strings wordDict, add spaces in s to construct a sentence where each word is a valid dictionary word. 
 * Return all such possible sentences in any order.
 * 
 * Note that the same word in the dictionary may be reused multiple times in the segmentation.
 */

const string1 = "catsanddog"
const word1 = ["cat","cats","and","sand","dog"]
const expect1 = ["cats and dog","cat sand dog"]

const string2 = "pineapplepenapple"
const word2 = ["apple","pen","applepen","pine","pineapple"]
const expect2 = ["pine apple pen apple","pineapple pen apple","pine applepen apple"]
// Explanation: Note that you are allowed to reuse a dictionary word.

const string3 = "catsandog"
const word3 = ["cats","dog","sand","and","cat"]
const expect3 = []
const wordBreakLVL2 = (s, wordDict) => {
};

console.log(wordBreakLVL2(string1, word1))
console.log(wordBreakLVL2(string2, word2))
console.log(wordBreakLVL2(string3, word3))
