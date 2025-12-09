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
    let vp = userInput[1].split(" ")
    let res = false

    for (let i of vp) {
        if (i == p) {
            res = true
        }
    }

    console.log(res ? "yes" : "no")

});
