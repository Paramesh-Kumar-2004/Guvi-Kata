const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {

    let p = userInput[1].split(" ").map(Number);
    let vp = 0;
    let seenPairs = new Set();

    for (let i = 0; i < p.length; i++) {
        for (let j = i + 1; j < p.length; j++) {
            if (p[i] < p[j]) {
                let key = `${p[i]}-${p[j]}`;
                if (!seenPairs.has(key)) {
                    seenPairs.add(key);
                    vp += 1;
                }
            }
        }
    }

    console.log(vp === 0 ? -1 : vp);
});