const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data.trim());
});

inp.on("close", () => {

    const v = userInput[0].split("");
    vp = 0

    for (let i of v) {
        vp += ((+i) ** 2)
        // console.log((+i) ** 2)
    }
    console.log(vp)

});