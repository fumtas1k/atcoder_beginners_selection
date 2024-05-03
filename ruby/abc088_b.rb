# ABC088B - Card Game for Two

N = gets.to_i
A = gets.split.map(&:to_i).sort.reverse

puts A.map.with_index {|a, i| i.even? ? a : -a }.sum
