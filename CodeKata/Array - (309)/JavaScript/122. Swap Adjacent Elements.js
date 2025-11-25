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
    let vp = []

    if (v.length % 2 != 0) {
        for (let i = 0; i < v.length - 1; i += 2) {
            vp.push(v[i + 1], v[i])
        }
        vp.push(v[v.length - 1])
    }
    if (v.length % 2 == 0) {
        for (let i = 0; i < v.length - 1; i += 2) {
            vp.push(v[i + 1], v[i])
        }
    }

    console.log(vp.join(" "))
});
