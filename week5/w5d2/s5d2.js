/**
 * @param {string[]} strs
 * @return {string[][]}
 * 
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 * 
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 * 
 * solution: https://youtu.be/vzdNOK2oB2E
 * https://leetcode.com/problems/group-anagrams/
 */

const strs1 = ["eat", "tea", "tan", "ate", "nat", "bat"]
const Output1 = [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]

const strs2 = [""]
const Output2 = [[""]]


const strs3 = ["a"]
const Output3 = [["a"]]
var groupAnagrams = function (strs) {
  const map = {};
  for (let i = 0; i < strs.length; i++) {
    const key = strs[i].split("").sort().join("")
    console.log(strs[i])
    if (!map[key]) {
      map[key] = [];
    }
    map[key].push(strs[i]);
    
  }
  return map
  // return Object.values(map);
};


console.log(groupAnagrams(strs1))
console.log(groupAnagrams(strs2))
console.log(groupAnagrams(strs3))