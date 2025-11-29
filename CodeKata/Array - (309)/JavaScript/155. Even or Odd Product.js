const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data.trim());
});

inp.on("close", () => {

    let v = userInput[0].split(" ").map(Number)
    let vp = userInput[1].split(" ")
    let pv = 1

    for (let i of vp) {
        pv *= i
    }

    console.log(pv % 2 == 0 ? "even" : "odd")

});
