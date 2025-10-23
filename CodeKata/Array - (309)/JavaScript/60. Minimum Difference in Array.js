const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {

    let v = parseInt(userInput[0]);
    let vv = userInput[1].split(" ").map(Number);

    vv.sort((a, b) => a - b);

    let vp = Infinity;

    for (let i = 1; i < v; i++) {
        let diff = Math.abs(vv[i] - vv[i - 1]);
        if (diff < vp) {
            vp = diff;
        }
    }

    console.log(vp);

});
