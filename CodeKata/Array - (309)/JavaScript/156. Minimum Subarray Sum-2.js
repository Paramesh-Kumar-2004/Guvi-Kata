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

    let minEndingHere = Infinity;
    let minSoFar = Infinity;

    for (let x of vp) {
        minEndingHere = Math.min(x, minEndingHere + x);
        minSoFar = Math.min(minSoFar, minEndingHere);
    }

    console.log(minSoFar);
});
