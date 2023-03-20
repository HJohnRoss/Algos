#  * @param {number[]} temperatures
#  * @return {number[]}
#  * 
#  * Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer
#  * temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.
#  * 
#  * https://leetcode.com/problems/daily-temperatures/
#  * solution: https://youtu.be/cTBiBSnjO3c

temperatures1 = [73,74,75,71,69,72,76,73]
expected1 = [1,1,4,2,1,1,0,0]

temperatures2 = [30,40,50,60]
expected2 = [1,1,1,0]

temperatures3 = [30,60,90]
expected3 = [1,1,0]
def dailyTemperatures(temperatures):
  """
  :type temperatures: List[int]
  :rtype: List[int]
  """

print(dailyTemperatures(temperatures1))
print(dailyTemperatures(temperatures2))
print(dailyTemperatures(temperatures3))