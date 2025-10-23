const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {

    let v = userInput[0].split(" ")
    let vv = userInput[1].split(" ").map(Number)
    let pp = userInput[2].split(" ").map(Number)
    let vp = [...vv, ...pp]
    let pv = vp.sort()
    console.log(pv.join(" "))

});




/*

const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {

  const tokens = userInput.join(" ").trim().split(/\s+/).map(Number);

  let v = tokens[0] || 0;
  let p = tokens[1] || 0;

  let vv = tokens.slice(2, 2 + v);
  let pp = tokens.slice(2 + v, 2 + v + p);

  let vp = [...vv, ...pp];
  let pv = vp.sort((a, b) => a - b);

  console.log(pv.join(" "));
});

*/