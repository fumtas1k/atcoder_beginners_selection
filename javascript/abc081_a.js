// ABC081A - Placing Marbles

const input = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
console.log(input[0].match(/1/g)?.length ?? 0);
