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

    if (vp.length !== v) {
        console.log("no");
        return;
    }

    let seen = new Array(v + 1).fill(false);

    for (let num of vp) {
        if (num < 1 || num > v || seen[num]) {
            console.log("no");
            return;
        }
        seen[num] = true;
    }

    console.log("yes");
});