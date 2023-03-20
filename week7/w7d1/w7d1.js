/**
 * @param {number[]} temperatures
 * @return {number[]}
 * 
 * Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer
 * temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.
 * 
 * https://leetcode.com/problems/daily-temperatures/
 * solution: https://youtu.be/cTBiBSnjO3c
 */

const temperatures1 = [73, 74, 75, 71, 69, 72, 76, 73]
const expected1 = [1, 1, 4, 2, 1, 1, 0, 0]

const temperatures2 = [30, 40, 50, 60]
const expected2 = [1, 1, 1, 0]

const temperatures3 = [30, 60, 90]
const expected3 = [1, 1, 0]
var dailyTemperatures = function (temperatures) {
  let stack = []
  let result = Array(temperatures.length).fill(0)
  for (let i = 0; i < temperatures.length; i++) {
    while (smaller(temperatures, stack, i)) {
      let prev = stack.pop()
      result[prev] = i - prev
    }
    stack.push(i)
  }

  return result
};

const smaller = (temperatures, stack, i) => {
  const prev = temperatures[stack[stack.length - 1]]
  const curr = temperatures[i]

  if (prev < curr) {
    return true
  }
  return false
}

// var dailyTemperatures1 = function (temperatures) {
//   let stack = []
//   let result = []
//   for (let i = 0; i < temperatures.length; i++) {
//     while (smaller(temperatures, stack, i)) {
//       let prev = stack.pop()
//       if(result[prev]) {
//         result[prev] = i - prev
//       } else {
//         result.push(i - prev)
//       }
//     }
//     stack.push(i)
//   }

//   return result
// };

console.log(dailyTemperatures(temperatures1))
console.log(dailyTemperatures(temperatures2))
console.log(dailyTemperatures(temperatures3))