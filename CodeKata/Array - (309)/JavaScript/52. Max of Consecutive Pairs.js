const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {

    let v = userInput[0].split(" ");
    let p = userInput[1].split(" ");
    let pv = []

    for (let i = 0; i < p.length - 1; i++) {
        pv.push(Math.max(p[i], p[i + 1]))
    }
    console.log(pv.join(" "))

});