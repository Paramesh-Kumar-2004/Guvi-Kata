const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data.trim());
});

inp.on("close", () => {

    let [v, p] = userInput[0].split(" ");
    let vp = userInput[1].split(" ").map(Number)

    let vv = vp.slice(0, p).sort((a, b) => a - b)
    let pp = vp.slice(p).sort((a, b) => b - a)

    // console.log(vv)
    // console.log(pp)

    console.log(vv.concat(pp).join(" "))


});
