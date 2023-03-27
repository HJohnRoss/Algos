#  * @param {number[]} piles
#  * @param {number} h
#  * @return {number}
#  * 
#  * Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.
#  * 
#  * Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile.
#  * If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.
#  * 
#  * Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.
#  * 
#  * Return the minimum integer k such that she can eat all the bananas within h hours.
#  * 
#  * solution: https://youtu.be/U2SozAs9RzA
#  * https://leetcode.com/problems/koko-eating-bananas/

piles1 = [3,6,7,11]
h1 = 8
expected1 = 4

piles2 = [30,11,23,4,20]
h2 = 5
expected2 = 30

piles3 = [30,11,23,4,20]
h3 = 6
expected3 = 23

def minEatingSpeed(piles, h):
  """
  :type piles: List[int]
  :type h: int
  :rtype: int
  """

print(minEatingSpeed(piles1, h1))
print(minEatingSpeed(piles2, h2))
print(minEatingSpeed(piles3, h3))