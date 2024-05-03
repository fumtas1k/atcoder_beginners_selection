// ABC081B - Shift only

const input = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
const N = parseInt(input[0], 10);
const A = input[1].split(" ").map(n => parseInt(n, 10));

let cnt = 0
while (A.every(a => a % 2 === 0)) {
  [...Array(N)].map((_, i) => A[i] /= 2);
  cnt++;
}

console.log(cnt);
