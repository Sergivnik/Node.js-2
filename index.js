const colors = require("colors/safe");

let a = Number(process.argv[2]);
let b = Number(process.argv[3]);
let color = 1;
for (let i = a; i < b; i++) {
  let j = 2;
  while (i % j != 0 && j < Math.sqrt(i)) {
    j++;
  }
  if (i % j == 0) {
    continue;
  } else {
    switch (color % 3) {
      case 0:
        console.log(colors.red(i));
        break;
      case 1:
        console.log(colors.green(i));
        break;
      case 2:
        console.log(colors.yellow(i));
        break;
      default:
        break;
    }
    color++;
  }
}
console.log(colors.red(a, b));
