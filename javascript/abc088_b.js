// ABC088B - Card Game for Two

const input = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
const N = parseInt(input[0], 10);
// sort()は、文字列としてソートするため比較関数を指定する必要がある。
const A = input[1].split(" ").map(n => parseInt(n, 10)).sort((a, b) => b - a);
const ans = A.reduce((acc, a, i) => acc + (i % 2 === 0 ? a : -a), 0);
console.log(ans);
