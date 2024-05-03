// ABC088B - Card Game for Two

const input = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
const N = parseInt(input[0], 10);
// sort().reverse()にすると半分が WA になるため、reverse を使用していない
const A = input[1].split(" ").map(n => parseInt(n, 10)).sort((a, b) => b - a);
const ans = A.reduce((acc, a, i) => acc + (i % 2 === 0 ? a : -a), 0);
console.log(ans);
