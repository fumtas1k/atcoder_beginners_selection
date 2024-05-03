// ABC083B - Some Sums

const input = require("fs").readFileSync("/dev/stdin", "utf8");
const [N, A, B] = input.split(" ").map(n => parseInt(n, 10));
let ans = 0;
for (let i = 1; i <= N; i++) {
  const sum = String(i).split("").reduce((acc, j) => acc + parseInt(j, 10), 0);
  if (sum >= A && sum <= B) ans += i;
}
console.log(ans);
