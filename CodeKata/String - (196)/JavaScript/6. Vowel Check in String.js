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
    let vp = "aeiou"
    let pv = "no"

    for (let i of v) {
        if (vp.includes(i)) {
            pv = "yes"
            break
        }
    }

    console.log(pv)
});
