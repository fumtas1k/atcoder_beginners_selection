// PracticeA - Welcome to AtCoder

const input = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
const A = parseInt(input[0], 10);
const [B, C] = input[1].split(" ").map(n => parseInt(n, 10));
const S = input[2];
console.log(A + B + C, S);
