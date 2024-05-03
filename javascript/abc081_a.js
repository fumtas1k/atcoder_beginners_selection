// ABC081A - Placing Marbles

const input = require("fs").readFileSync("/dev/stdin", "utf8");
console.log(input.match(/1/g)?.length ?? 0);
