const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {

    const v = Number(userInput[0]);
    const p = userInput[1].split(" ").map(Number);
    let vp = []

    for (let i = 0; i < v; i++) {
        let pv = 0
        for (let j = i; j < v; j++) {
            pv += p[j]
        }
        vp.push(pv)
    }

    console.log(vp.join(" "))

});
