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
    let vp = []
    let pv = 0

    for (let i of v) {
        pv += 1
        if (p == pv) {
            vp.push(i)
            pv = 0
        }
    }

    console.log(vp.join(" "))

});
