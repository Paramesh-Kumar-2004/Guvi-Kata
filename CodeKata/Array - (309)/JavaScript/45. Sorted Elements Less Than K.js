const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {

  const [N, K] = userInput[0].trim().split(" ").map(Number);
  const arr = userInput[1].trim().split(" ").map(Number);
  const filtered = arr.filter(ele => ele < K);

  if (filtered.length === 0) {
    console.log(-1);
  }
  else {
    filtered.sort((a, b) => a - b);
    console.log(filtered.join(" "));
  }

});
