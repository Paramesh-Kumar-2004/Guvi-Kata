const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {

    let v = userInput[0]
    let p = userInput[1]
    let vp = v + p

    if (vp.length === 26 && new Set(vp).size === 26) {
        console.log("yes")
    }
    else {
        console.log("no")
    }

});