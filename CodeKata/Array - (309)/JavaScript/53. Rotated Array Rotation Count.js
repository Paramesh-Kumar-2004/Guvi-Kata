const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {

    let v = userInput[0].split(" ");
    let p = userInput[1].split(" ").map(Number);
    let vp = Math.min(...p)
    let pv = p.indexOf(vp)

    if (pv === 0) {
        console.log(-1)
    } else {
        console.log(pv)
    }

});