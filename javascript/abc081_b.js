// ABC081B - Shift only

const input = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
const N =Number(input[0]);
const A = input[1].split(" ").map(Number);

let cnt = 0
while (A.every(a => a % 2 === 0)) {
  [...Array(N)].map((_, i) => A[i] /= 2);
  cnt++;
}

console.log(cnt);
