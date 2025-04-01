-- ABC081B - Shift only

main :: IO ()
main = do
  _ <- getLine
  as <- map (read :: String -> Integer) . words <$> getLine
  print $ countSteps as 0
  where
    countSteps :: [Integer] -> Integer -> Integer
    countSteps xs i
      | all even xs = countSteps (map (`div` 2) xs) (i + 1)
      | otherwise = i
