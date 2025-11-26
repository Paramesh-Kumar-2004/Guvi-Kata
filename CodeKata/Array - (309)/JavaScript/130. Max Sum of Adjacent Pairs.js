const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {

    const v = userInput[1].split(" ").map(Number)
    let vp = 0

    for (let i = 0; i < v.length - 1; i++) {
        p = Math.max(v[i], v[i + 1])
        vp += p
    }
    console.log(vp)

});