const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data.trim());
});

inp.on("close", () => {

    let v = +userInput[0];
    let vp = userInput[1].split(" ").map(Number)

    let vv = {}

    for (let i of vp) {
        vv[i] = (vv[i] || 0) + 1
    }

    let pp = Object.entries(vv)

    pp.sort((a, b) => a[1] - b[1])

    console.log(pp[0][0])

});