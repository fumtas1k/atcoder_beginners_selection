# ABC085B - Kagami Mochi

require "set"

N = gets.to_i
# uniqを使用するよりsetにする方が速い
puts Array.new(N) { gets.to_i }.to_set.size
