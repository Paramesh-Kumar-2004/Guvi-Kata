const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
}); 

inp.on("close", () => {

  let v = userInput[0].split(" ")[1]
  let p = userInput[1].split(" ")

  const pv = p.filter(ele => Number(v) > Number(v))

  if (pv.length > 1) {
    console.log(pv.join(" "))
  }
  else {
    console.log(-1)
  }
});