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
    let p = userInput[1]
    vp = 0

    for (let i of v) {
        if (i == p) {
            vp += 1
        }
    }

    if (vp > 0) {
        console.log(vp)
    }
    else {
        console.log(-1)
    }
});