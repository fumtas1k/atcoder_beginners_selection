-- ABC085C - Otoshidama

main :: IO ()
main = do
  [n, y] <- map (read :: String -> Integer) . words <$> getLine
  let ans = [[a, b, c] | a <- [0 .. n], b <- [0 .. n - a], let c = n - a - b, 10_000 * a + 5_000 * b + 1_000 * c == y]
  putStrLn $ unwords $ map show $ case ans of
    [] -> [-1, -1, -1]
    (x : _) -> x
