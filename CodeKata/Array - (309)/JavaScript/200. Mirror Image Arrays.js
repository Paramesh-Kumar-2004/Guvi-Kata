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
    let vp = userInput[1].split(" ")
    let pv = userInput[2].split(" ")

    console.log(vp.join("") == pv.reverse().join("") ? "yes" : "no")


});