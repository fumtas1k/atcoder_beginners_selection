// ABC085B - Kagami Mochi

const input = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
const N = Number(input[0]);
const D = [...Array(N)].map((_, i) => Number(input[i + 1]));
console.log(new Set(D).size);
