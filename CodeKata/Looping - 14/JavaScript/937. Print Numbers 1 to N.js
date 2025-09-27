const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {

    let vp = +userInput[0]
    for (let i = 0; i < vp; i++) {
        console.log(i + 1)
    }

});