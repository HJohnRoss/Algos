/**
 * @param {number[]} nums
 * @return {boolean}
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 * https://leetcode.com/problems/contains-duplicate/
 */

// 1st problem
// easy on leetcode
const test1 = [1, 2, 3, 1]
const expectedOutput1 = true

const test2 = [1, 2, 3, 4]
const expectedOutput2 = false

const test3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
const expectedOutput3 = true

const test4 = [1, 2, 3, 1]
const expectedOutput4 = true

const test5 = [1, 2, 3, 1]
const expectedOutput5 = true

const containsDuplicate = (nums) => {
  let obj = {}
  nums.map((e) => {
    if (!obj[e.toString()]) {
      return obj[e.toString()] = 1
    } else {
      return obj[e.toString()]++
    }
  })
  for (key in obj) {
    if (obj[key] > 1) {
      return true
    }
  }
  return false
};

// console.log(containsDuplicate(test1))
// console.log(containsDuplicate(test2))
// console.log(containsDuplicate(test3))
// console.log(containsDuplicate(test4))
// console.log(containsDuplicate(test5))

/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 * You are given two strings order and s. All the characters of order are unique and were sorted in some custom order previously.

    Permute the characters of s so that they match the order that order was sorted. More specifically,
     if a character x occurs before a character y in order, then x should occur before y in the permuted string.

    Return any permutation of s that satisfies this property.

    https://leetcode.com/problems/custom-sort-string/
 */

// 2nd problem
// medium
// try to make this efficiently
// const order1 = "cba"
// const string1 = "abcd"
// const expected3 = "cbad"

// const order2 = "cbafg"
// const string2 = "abcd"
// const expected2 = "cbad"
// function customSortString(order, s) {
//   let result = ""
//   let i = 0
//   while () {
//     for (let j = 0; j < s.length; j++) {
//       if (order[i] === s[j]) {
//         result += s[j]
//       }
//     }
//   }
//   for(let i = 0; i < s.length; i++){

//   }
//   return result
// };

// console.log(customSortString(order1, string1))
// console.log(customSortString(order2, string2))