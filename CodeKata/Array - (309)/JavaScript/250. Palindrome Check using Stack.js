const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data.trim());
});

inp.on("close", () => {

    let v = userInput[0]
    let stack = []

    for (let i of v) {
        stack.push(i)
    }

    let reverse = ""
    while (stack.length > 0) {
        reverse += stack.pop()
    }

    console.log(reverse === v ? "yes" : "no")

});
