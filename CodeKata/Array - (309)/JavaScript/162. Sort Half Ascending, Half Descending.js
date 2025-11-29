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
    let lastIndex = v - 1;
    let half;

    if (v % 2 === 1) {
        half = Math.floor((lastIndex - 1) / 2);
    } else {
        half = Math.floor(lastIndex / 2);
    }

    let first = vp.slice(0, half + 1).sort((a, b) => a - b);

    let second = vp.slice(half + 1).sort((a, b) => b - a);

    let result = [...first, ...second];

    console.log(result.join(" "));
});
