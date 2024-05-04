// ABC049C - 白昼夢

const input = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
const FORMAT = ["dream", "dreamer", "erase", "eraser"].map(str => str.split("").reverse().join(""));
const S = input[0].split("").reverse().join("");

let i = 0;
while (i < S.length) {
  let is_match = false;
  FORMAT.forEach(format => {
    if (is_match || !S.substring(i).startsWith(format)) return; // このreturnはfor文のcontinueと同じ意味
    is_match = true;
    i += format.length;
  });
  if (is_match) continue;
  console.log("NO");
  return; // このreturnで実行終了できる
}
console.log("YES");
