-- PracticeA - Welcome to AtCoder

main :: IO ()
main = do
  a <- readLn
  [b, c] <- map (read :: String -> Integer) . words <$> getLine
  s <- getLine
  putStrLn $ unwords [show (a + b + c), s]
