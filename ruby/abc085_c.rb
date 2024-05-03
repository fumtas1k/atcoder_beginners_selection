# ABC085C - Otoshidama

N, Y = gets.split.map(&:to_i)

(N + 1).times do |x|
  break if Y < 10_000 * x
  (N + 1 - x).times do |y|
    z1000 = Y - (10_000 * x + 5_000 * y)
    break if z1000 < 0
    z = z1000 / 1_000
    next unless z1000 % 1_000 == 0 && x + y + z == N
    puts [x, y, z].join(" ")
    exit
  end
end

puts [-1, -1, -1].join(" ")
