const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data.trim());
});

inp.on("close", () => {

    let [v, p] = userInput[0].split(" ").map(Number);
    let vp = userInput[1].split(" ").map(Number);
    let pv = [];

    for (let i of vp) {
        pv.push([i, Math.abs(i - p)]);
    }

    let vv = pv.sort((a, b) => a[1] - b[1]);

    let pp = [];
    for (let i = 0; i < vv.length && pp.length < 3; i++) {
        if (vv[i][0] !== p) {
            pp.push(vv[i][0]);
        }
    }

    console.log(pp.join(" "));
});
