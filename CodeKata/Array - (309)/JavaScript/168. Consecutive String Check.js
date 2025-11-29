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
    let vp = false

    for (let i = 1; i < v; i++) {
        if (userInput[i] == userInput[i + 1]) {
            vp = true
            break
        }
    }

    console.log(vp ? "yes" : "no")

});
