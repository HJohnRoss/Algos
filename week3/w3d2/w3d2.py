# * @param {number[]} prices
# * @return {number}
# * 
# * You are given an array prices where prices[i] is the price of a given stock on the ith day.
# * 
# * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
# * 
# * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
# * 
# * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
# * solution: https://youtu.be/1pkOgXD63yU
# * tip: https://www.geeksforgeeks.org/window-sliding-technique/


prices1 = [7, 1, 5, 3, 6, 4]
expected1 = 5
# Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
# Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

prices2 = [7, 6, 4, 3, 1]
expected2 = 0
# Explanation: In this case, no transactions are done and the max profit = 0.

def maxProfit(prices):
  min = prices[0]
  val = 0
  max = prices[0]
  i = 0
  
  while i < len(prices):
    if prices[i] <= min:
      max = prices[i]
      min = prices[i]
    elif prices[i] > max:
      max = prices[i]
    if val < (max - min):
      val = max - min
    i += 1
  return val

print(maxProfit(prices1))
print(maxProfit(prices2))