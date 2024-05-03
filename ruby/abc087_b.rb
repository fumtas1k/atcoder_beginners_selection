# ABC087B - Coins

A = gets.to_i
B = gets.to_i
C = gets.to_i
X = gets.to_i

cnt = 0
(A + 1).times do |a|
  break if X < 500 * a
  (B + 1).times do |b|
    c50 = X - (500 * a + 100 * b)
    break if c50 < 0
    cnt += 1 if c50 <= C * 50 && c50 % 50 == 0
  end
end

puts cnt
