const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data.trim());
});

inp.on("close", () => {

    let v = +userInput[0]

    let bin = v.toString(2)
    let vp = 0

    for (let i = bin.length - 1; i >= 0; i--) {
        if (bin[i] == 1) {
            vp += 1
        }
    }

    console.log(vp)

});