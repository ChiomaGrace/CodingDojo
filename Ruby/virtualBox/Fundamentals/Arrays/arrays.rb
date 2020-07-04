nbaPlayers = ["Curry", "Lebron", "Jordan", "Westbrook", "Durant", "Irving"]
nbaTeams = ["Warriors", "Lakers", "Bulls", "Rockets", "Nets", "Nets"]

puts nbaPlayers.at(2)
puts nbaPlayers.fetch(0)
nbaPlayers.delete("Durant")
# puts nbaPlayers
# puts nbaPlayers.reverse
nbaPlayers.length
puts "The number of NBA plays in this list are #{nbaPlayers.length}."
# puts nbaPlayers.sort
nbaPlayers.slice!(-1)
# puts nbaPlayers
# puts nbaPlayers.shuffle
puts nbaPlayers.join(", ")
nbaPlayers.insert(1,"Leonard")
# puts nbaPlayers
puts nbaTeams.values_at(-1,-2)
