-- ABC083B - Some Sums

sumDigits :: Integer -> Integer
sumDigits x = sum [read [c] | c <- show x]

main :: IO ()
main = do
  [n, a, b] <- map (read :: String -> Integer) . words <$> getLine
  print $ sum [i | i <- [1 .. n], let s = sumDigits i, a <= s, s <= b]
