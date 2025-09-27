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
    for (let i = 1; i <= v; i++) {
        if (i % 2 == 0) {
            console.log(i)
        }
    }

});