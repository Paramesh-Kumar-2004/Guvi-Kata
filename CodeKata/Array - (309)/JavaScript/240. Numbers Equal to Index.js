const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data.trim());
});

inp.on("close", () => {

    let v = Number(userInput[0]);
    let vp = userInput[1].split(" ").map(Number);
    let pv = []

    for (let i = 0; i < v; i++) {
        if (i == vp[i]) {
            pv.push(i)
        }
    }

    console.log(pv.length > 0 ? pv.join(" ") : -1)

});
