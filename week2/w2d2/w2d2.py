# There's an algorithms tournament taking place in which teams of programmers
# compete against each other to solve algorithmic problems as fast as possible.
# Teams compete in a round robin, where each team faces off against all other
# teams. Only two teams compete against each other at a time, and for each
# competition, one team is designated the home team, while the other team is the
# away team. In each competition there's always one winner and one loser; there
# are no ties. A team receives 3 points if it wins and 0 points if it loses. The
# winner of the tournament is the team that receives the most amount of points.

# Given an array of pairs representing the teams that have competed against each
# other and an array containing the results of each competition, write a
# function that returns the winner of the tournament. The input arrays are named
# competitions and results, respectively. The competitions  array has elements in the form of
# [homeTeam, awayTeam], where each team is a string of at most 30
# characters representing the name of the team. The results  array
# contains information about the winner of each corresponding competition in the
# competitions array. Specifically, results[i] denotes
# the winner of competitions[i], where a 1 in the
# results array means that the home team in the corresponding
# competition won and a 0 means that the away team won.

# It's guaranteed that exactly one team will win the tournament and that each
# team will compete against all other teams exactly once. It's also guaranteed
# that the tournament will always have at least two teams.


competitions1 = [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"]
]
results1 = [0, 0, 1]
expected1 = "Python"

competitions2 = [
  ["HTML", "Java"],
  ["Java", "Python"],
  ["Python", "HTML"]
]
results2 = [0, 1, 1]
expected2 = "Java"

competitions3 = [
  ["HTML", "Java"],
    ["Java", "Python"],
    ["Python", "HTML"],
    ["C#", "Python"],
    ["Java", "C#"],
    ["C#", "HTML"]
]
results3 = [0, 1, 1, 1, 0, 1]
expected3 = "C#"

competitions4 = [
  ["HTML", "Java"],
  ["Java", "Python"],
  ["Python", "HTML"],
  ["C#", "Python"],
  ["Java", "C#"],
  ["C#", "HTML"],
  ["SQL", "C#"],
  ["HTML", "SQL"],
  ["SQL", "Python"],
  ["SQL", "Java"]
]
results4 = [0, 1, 1, 1, 0, 1, 0, 1, 1, 0]
expected4 = "C#"

competitions5 = [
  ["Bulls", "Eagles"]
]
results5 = [1]
expected5 = "Bulls"

# dont overcomplicate this problem - john
# this is not a problem on free leetcode (is a problem from algo expert or on the paid version of leetcode)
# does not have a video but its not to complicated
def tournamentWinner(competitions, results):
  i = 0
  obj = {}
  winner = ""
  while i < len(competitions):
    if results[i] == 0:
      match = competitions[i][1]
    else:
      match = competitions[i][0]
    if match not in obj:
      obj[match] = 3
    else:
      obj[match] += 3
    if winner == "" or obj[winner] < obj[match]:
      winner = match
    i += 1
  print(obj)
  return winner;

print(tournamentWinner(competitions1, results1))
print("-------------------")
print(tournamentWinner(competitions2, results2))
print("-------------------")
print(tournamentWinner(competitions3, results3))
print("-------------------")
print(tournamentWinner(competitions4, results4))
print("-------------------")
print(tournamentWinner(competitions5, results5))