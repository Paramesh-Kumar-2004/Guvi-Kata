// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {

    let [v, p] = userInput[0].split(" ")
    if (v === p) {
        console.log("yes")
    }
    else {
        console.log("no")
    }

});