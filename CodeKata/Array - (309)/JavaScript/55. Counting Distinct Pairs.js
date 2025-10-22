const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {

    let v = userInput[0].split(" ")
    let p = userInput[1].split(" ").map(Number)
    let vp = 0
    let pv = [...new Set(p)].sort((a, b) => a - b);
    //   console.log(pv)

    for (let i = 0; i < pv.length; i++) {
        for (let j = i + 1; j < pv.length; j++) {
            if (pv[i] < pv[j]) {
                console.log(p[i], p[j], p[i] < p[j])
                vp += 1
            }
        }
    }
    console.log(vp < 0 ? -1 : vp)
});