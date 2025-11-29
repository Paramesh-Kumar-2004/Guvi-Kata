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
    let vp = userInput[1].split(" ").map(Number)
    let pv = 0

    for (let i of vp) {
        if (i == p) {
            pv += 1
        }
    }

    console.log(pv != 0 ? `yes ${pv}` : "no")

});
