const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {

    let v = userInput[0].split(" ")
    let p = userInput[1].split(" ")
    let vp = p.indexOf(v[1])

    if (vp === -1) {
        console.log(vp)
    }
    else {
        console.log(vp + 1)
    }

});