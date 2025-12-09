// Getting input via STDIN
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
    let p = Number(v[0]) * Number(v[1])
    let vp = p.toString(2)
    let f = vp.indexOf("1")
    let s = vp.indexOf("1", f + 1)

    console.log(s + 1)

});