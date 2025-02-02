-- ABC081A - Placing Marbles

main :: IO ()
main = print . length . filter (=='1') =<< getLine
