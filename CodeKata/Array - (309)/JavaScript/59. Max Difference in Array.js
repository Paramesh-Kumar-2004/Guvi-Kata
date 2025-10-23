const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {

    let v = userInput[0].split(" ")
    let vv = userInput[1].split(" ").map(Number)

    console.log(Math.max(...vv) - Math.min(...vv))

});