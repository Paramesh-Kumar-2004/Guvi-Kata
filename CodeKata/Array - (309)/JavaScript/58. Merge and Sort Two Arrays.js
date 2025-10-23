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