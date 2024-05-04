# ABC049C - 白昼夢

FORMAT = %w[dream dreamer erase eraser].map(&:reverse)
S = gets.chomp.reverse

i = 0
while i < S.size
  is_match = false
  FORMAT.each do |format|
    next unless S[i..].start_with?(format)
    is_match = true
    i += format.size
    break
  end
  next if is_match
  puts "NO"
  exit
end

puts "YES"
