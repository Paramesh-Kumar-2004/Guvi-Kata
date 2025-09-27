const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {

    let v = +userInput[0]
    let vp = 0
    for (let i = 0; i <= v; i++) {
        vp += i
    }
    console.log(vp)

});