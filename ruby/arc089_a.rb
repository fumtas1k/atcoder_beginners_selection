# ABC086C - Traveling

N = gets.to_i
TXY = Array.new(N) { gets.split.map(&:to_i) }
TXY.unshift([0, 0, 0])

1.upto(N) do |i|
  pre_t, pre_x, pre_y = TXY[i - 1]
  t, x, y = TXY[i]
  t_diff = t - pre_t
  dist = (x - pre_x).abs + (y - pre_y).abs
  next if t_diff >= dist && t_diff[0] == dist[0]
  puts "No"
  exit
end

puts "Yes"
