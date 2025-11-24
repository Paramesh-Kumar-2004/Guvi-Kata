// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {

    let v = userInput[0]
    let stack = []

    for (let i of v) {
        if (i == '(') {
            stack.push(i)
        }
        else {
            stack.pop()
        }
    }

    console.log(stack.length === 0 ? "yes" : "no")

});