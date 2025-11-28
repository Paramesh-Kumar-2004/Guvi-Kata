const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

let userInput = "";

inp.on("line", (data) => {
    userInput = data.trim();
});

inp.on("close", () => {

    let vp = userInput;
    let result = "";

    for (let i = 0; i < vp.length - 1; i += 2) {
        result += vp[i + 1] + vp[i];
    }

    if (vp.length % 2 === 1) {
        result += vp[vp.length - 1];
    }

    console.log(result);
});
