-- ABC088B - Card Game for Two

import Data.List

main :: IO ()
main = do
  _ <- getLine
  as <- map (read :: String -> Integer) . words <$> getLine
  print $ sum $ zipWith (*) (cycle [1, -1]) $ reverse $ sort as
