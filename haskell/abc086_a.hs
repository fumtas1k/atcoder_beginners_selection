-- ABC086A - Product

main :: IO ()
main = do
  [a, b] <- map (read :: String -> Integer) . words <$> getLine
  putStrLn $ if even (a * b) then "Even" else "Odd"
