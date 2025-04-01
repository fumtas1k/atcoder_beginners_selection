-- PracticeA - Welcome to AtCoder

main :: IO ()
main = do
  a <- readLn :: IO Int
  [b, c] <- map (read :: String -> Int) . words <$> getLine
  s <- getLine
  putStrLn $ unwords [show (a + b + c), s]
