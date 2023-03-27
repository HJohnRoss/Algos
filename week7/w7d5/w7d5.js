/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 * 
 * Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.
 * 
 * Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile.
 * If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.
 * 
 * Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.
 * 
 * Return the minimum integer k such that she can eat all the bananas within h hours.
 * 
 * solution: https://youtu.be/U2SozAs9RzA
 * https://leetcode.com/problems/koko-eating-bananas/
 */

const piles1 = [3,6,7,11]
const h1 = 8
const expected1 = 4

const piles2 = [30,11,23,4,20]
const h2 = 5
const expected2 = 30

const piles3 = [30,11,23,4,20]
const h3 = 6
const expected3 = 23

var minEatingSpeed = function(piles, h) {
  let left = 1
  let right = Math.max(...piles)
  let res = right

  while (left <= right) {
    let k = (left + right) / 2
    let hours = 0
    for(let i = 0; i < piles.length; i++) {
      hours += (piles[i] / k)
    }
    if(hours <= h) {
      res = Math.min(res, k)
      right = k - 1
    } else {
      left = k + 1
    }
  }
  return res
};

console.log(minEatingSpeed(piles1, h1))
console.log(minEatingSpeed(piles2, h2))
console.log(minEatingSpeed(piles3, h3))