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
    let vv = false

    for (let i = 0; i < v; i++) {
        for (let j = i + 1; j < v; j++) {
            if (vp[i] + vp[j] == p) {
                vv = true
            }
        }
    }

    console.log(vv ? "yes" : "no")

});
