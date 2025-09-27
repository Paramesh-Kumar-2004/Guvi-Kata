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
    let p = +userInput[1]
    for (let i = 0; i < p; i++) {
        console.log(v)
    }

});