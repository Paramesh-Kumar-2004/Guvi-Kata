const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {

    let [v, p] = userInput[0].split(" ").map(Number);
    let vp = userInput[1].split(" ").map(Number);

    let vv = [...new Set(vp)].sort((a, b) => a - b);

    if (p <= vv.length) {
        console.log(vv[p - 1]);
    }
    else {
        console.log(-1);
    }

});