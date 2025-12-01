const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data.trim());
});

inp.on("close", () => {

    let v = userInput[0];
    let p = userInput[1].split(" ");

    let res = "unique";
    let vp = new Set();

    for (let i of p) {
        if (vp.has(i)) {
            res = i;
            break;
        }
        vp.add(i);
    }

    console.log(res);
});