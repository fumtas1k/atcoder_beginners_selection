# ABC083B - Some Sums

N, A, B = gets.split.map(&:to_i)
puts (1 .. N).filter { _1.digits.sum.between?(A, B) }.sum
