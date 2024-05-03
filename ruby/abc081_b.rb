# ABC081B - Shift only

N = gets.to_i
A = gets.split.map(&:to_i)

cnt = 0
while A.all? { _1.even? }
  A.map! { _1 >> 1 }
  cnt += 1
end

puts cnt
