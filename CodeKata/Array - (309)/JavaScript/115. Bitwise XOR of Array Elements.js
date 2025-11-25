const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {

    const v = parseInt(userInput[0]);
    const vp = userInput[1].split(" ").map(Number);

    let xorResult = 0;

    for (let i = 0; i < v; i++) {
        xorResult ^= vp[i];
    }

    console.log(xorResult);
});
