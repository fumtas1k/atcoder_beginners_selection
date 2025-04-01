-- ABC083B - Some Sums

import Data.Char (digitToInt)

main :: IO ()
main = do
  [n, a, b] <- map (read :: String -> Integer) . words <$> getLine
  print $ sum $ filter (\x -> let s = sumDigits x in a <= s && s <= b) [1..n]
  where
    sumDigits :: Integer -> Integer
    sumDigits x = sum $ map (fromIntegral . digitToInt) $ show x
