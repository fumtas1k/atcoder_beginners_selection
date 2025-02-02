-- ABC087B - Coins

import Control.Monad

main :: IO ()
main = do
  [a, b, c, x] <- replicateM 4 (readLn :: IO Integer)
  print $ length [() | i <- [0 .. a], j <- [0 .. b], k <- [0 .. c], 500 * i + 100 * j + 50 * k == x]
