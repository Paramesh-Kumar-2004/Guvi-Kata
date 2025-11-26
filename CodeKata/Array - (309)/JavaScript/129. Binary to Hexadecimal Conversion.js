const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {

    const v = +userInput[0]
    console.log(parseInt(v, 2).toString(16).toUpperCase());

});