const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {

    let vp = userInput[0].split("")
    let v = vp.length / 2

    if (!Number.isInteger(v)) {
        vp[Math.round(v) - 1] = "*"
    }
    else {
        vp[v - 1] = "*"
        vp[v] = "*"
    }

    console.log(vp.join(""))

});