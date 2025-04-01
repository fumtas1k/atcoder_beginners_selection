-- ABC081A - Placing Marbles

import Data.Char (digitToInt)

main :: IO ()
main = do
  s <- map digitToInt <$> getLine
  print $ sum s
