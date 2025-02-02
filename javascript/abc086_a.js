// ABC086A - Product

const input = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
const [A, B] = input[0].split(" ").map(Number);
console.log(A * B % 2 === 0 ? "Even" : "Odd");
