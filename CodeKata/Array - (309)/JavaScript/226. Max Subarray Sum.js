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

    let pv = vp[0];
    let cs = vp[0];

    for (let i = 1; i < v; i++) {
        cs = Math.max(vp[i], cs + vp[i]);
        pv = Math.max(pv, cs);
    }

    console.log(pv);

});