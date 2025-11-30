const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data.trim());
});

inp.on("close", () => {

    let [v, p] = userInput[0].split(" ");
    let vp = userInput[1].split(" ").map(Number)
    let pv = -1

    for (let i = p; i >= 0; i--) {
        if (vp[i] <= p) {
            pv = vp[i]
            break
        }
    }

    console.log(pv)

});