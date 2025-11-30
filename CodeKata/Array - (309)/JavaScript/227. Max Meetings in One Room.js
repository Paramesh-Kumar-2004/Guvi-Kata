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
    let pv = userInput[2].split(" ").map(Number);
    let meetings = [];

    for (let i = 0; i < v; i++) {
        meetings.push([vp[i], pv[i]]);
    }

    meetings.sort((a, b) => a[1] - b[1]);

    let count = 1;
    let lastFinish = meetings[0][1];

    for (let i = 1; i < v; i++) {
        if (meetings[i][0] >= lastFinish) {
            count++;
            lastFinish = meetings[i][1];
        }
    }

    console.log(count);
});
