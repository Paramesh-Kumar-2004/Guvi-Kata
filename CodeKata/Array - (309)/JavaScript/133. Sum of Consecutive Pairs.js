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
    let vp = 0

    for (let i = 0; i < v - 1; i++) {
        vp += p[i] + p[i + 1]
    }
    console.log(vp);

});