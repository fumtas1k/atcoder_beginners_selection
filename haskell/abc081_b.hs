-- ABC081B - Shift only

countDivisibleBy2 :: Integral t => t -> Int
countDivisibleBy2 x = if even x then 1 + countDivisibleBy2 (x `div` 2) else 0

main :: IO ()
main = do
  _ <- getLine
  as <- map (read :: String -> Integer) . words <$> getLine
  print $ minimum $ map countDivisibleBy2 as
