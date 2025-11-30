const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data.trim());
});

inp.on("close", () => {

    let v = +userInput[0];
    let vp = userInput[1].split(" ").map(Number);

    let maxEnding = vp[0];
    let minEnding = vp[0];
    let product = vp[0];

    for (let i = 1; i < v; i++) {
        let curr = vp[i];

        if (curr < 0) {
            [maxEnding, minEnding] = [minEnding, maxEnding];
        }

        maxEnding = Math.max(curr, maxEnding * curr);
        minEnding = Math.min(curr, minEnding * curr);

        product = Math.max(product, maxEnding);
    }

    console.log(product);
});