// ABC086A - Product

const input = require("fs").readFileSync("/dev/stdin", "utf8");
const [A, B] = input.split(" ").map(n => parseInt(n, 10));
console.log(A * B % 2 === 0 ? "Even" : "Odd");
