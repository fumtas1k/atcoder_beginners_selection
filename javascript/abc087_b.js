// ABC087B - Coins

const input = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
const [A, B, C, X] = input.map(Number);

let cnt = 0;
for (let a = 0; a <= A; a++) {
  if (a * 500 > X) break;
  for (let b = 0; b <= B; b++) {
    const c50 = X - (500 * a + 100 * b);
    if (c50 < 0) break;
    if (c50 <= C * 50 && c50 % 50 === 0) cnt++;
  }
}

console.log(cnt);
