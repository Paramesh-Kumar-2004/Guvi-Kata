const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {

    let v = userInput[1].split(" ").map(Number)
    let p = userInput[2].split(" ").map(Number)
    let vp = [...v]
    let pv = []

    for (let i = 0; i < p.length; i++) {
        vp.push(p[i])
        pv.push(Math.max(...vp))
    }
    console.log(pv.join(" "))

});