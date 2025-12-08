const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data.trim());
});

inp.on("close", () => {

    let [v, p] = userInput[0].split(" ")
    console.log(v.includes(p) ? "yes" : "no")

});