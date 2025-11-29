const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data.trim());
});

inp.on("close", () => {

    let [v, p] = userInput[0].split(" ").map(Number)
    let vp = false

    for (let i = 1; i < v; i++) {
        for (let j = i; j < p; j++) {
            // console.log(userInput[j],userInput[j+1])
            if (userInput[j] == userInput[j + 1]) {
                vp = true
            }
            else {
                vp = false
            }
        }
    }

    console.log(vp ? "yes" : "no")

});