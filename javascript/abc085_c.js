// ABC085C - Otoshidama

const input = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
const [N, Y] = input[0].split(" ").map(Number);

for (let x = 0; x <= N; x++) {
  if (Y < 10_000 * x) break;
  for (let y = 0; y <= N - x; y++) {
    const z1000 = Y - (10_000 * x + 5_000 * y);
    if (z1000 < 0) break;
    const z = z1000 / 1_000;
    if (z1000 % 1_000 === 0 && x + y + z === N) {
      console.log(x, y, z);
      return;
    }
  }
}

console.log(-1, -1, -1);
