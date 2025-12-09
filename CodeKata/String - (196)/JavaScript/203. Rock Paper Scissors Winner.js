const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {

    let v = userInput[0].split(" ")[0]
    let p = userInput[0].split(" ")[1]

    if (v === p) {
        console.log("D")
    } else if (
        (v === "R" && p === "S") ||
        (v === "S" && p === "P") ||
        (v === "P" && p === "R")
    ) {
        console.log(v)
    } else {
        console.log(p)
    }

});