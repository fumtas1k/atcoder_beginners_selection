// ABC086C - Traveling

const input = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
const N = Number(input[0]);
const TXY = [[0, 0, 0]];
for (let i = 1; i <= N; i++) {
  const [preT, preX, preY] = TXY[i - 1];
  const [t, x, y] = input[i].split(" ").map(Number);
  TXY.push([t, x, y]);

  const diffT = t - preT;
  const dist = Math.abs(x - preX) + Math.abs(y - preY);
  if (diffT >= dist && diffT % 2 == dist % 2) continue;
  console.log("No");
  return;
}

console.log("Yes");
