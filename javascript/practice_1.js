// PracticeA - Welcome to AtCoder

const input = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
const A = Number(input[0]);
const [B, C] = input[1].split(" ").map(Number);
const S = input[2];
console.log(A + B + C, S);
