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
    let pv = userInput[2].split(" ")

    let vv = new Set(vp)
    let res = true

    for (let i of pv) {
        if (!vv.has(i)) {
            res = false
            break
        }
    }

    console.log(res ? "yes" : "no")

});
