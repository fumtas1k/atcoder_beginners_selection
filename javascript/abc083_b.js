// ABC083B - Some Sums

const input = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
const [N, A, B] = input[0].split(" ").map(Number);
let ans = 0;
for (let i = 1; i <= N; i++) {
  const sum = String(i).split("").reduce((acc, j) => acc + Number(j), 0);
  if (sum >= A && sum <= B) ans += i;
}
console.log(ans);
