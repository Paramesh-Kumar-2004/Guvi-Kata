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
    let p = userInput[1].split(" ").map(Number)

    let vp_b = Math.max(...p)
    let vp_s = Math.min(...p)

    console.log(Math.abs(p.indexOf(vp_s) - p.indexOf(vp_b)))

});
