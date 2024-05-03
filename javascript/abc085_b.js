// ABC085B - Kagami Mochi

const input = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
const N = parseInt(input[0], 10);
const D = [...Array(N)].map((_, i) => parseInt(input[i + 1], 10));
console.log(new Set(D).size);
