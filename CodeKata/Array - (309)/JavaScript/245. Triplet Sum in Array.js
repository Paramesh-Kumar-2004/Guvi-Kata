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
    let p = userInput[1].split(" ").map(Number);
    let count = 0

    for (let i = 0; i < v; i++) {
        for (let j = i + 1; j < v; j++) {
            for (let k = j + 1; k < v; k++) {
                if (p[i] + p[j] == p[k]) {
                    count += 1
                }
            }
        }
    }

    console.log(count)
});