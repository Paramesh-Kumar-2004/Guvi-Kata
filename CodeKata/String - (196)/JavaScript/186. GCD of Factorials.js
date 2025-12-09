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
    let p = Math.min(Number(v[0]), Number(v[1]))

    let vp = 1
    for (let i = 1; i <= p; i++) {
        vp = vp * i
    }

    console.log(vp)
});