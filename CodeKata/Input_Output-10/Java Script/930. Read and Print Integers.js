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
    let vp = userInput[2].split(" ")
    console.log(v.join(" "), p.join(" "), vp.join())

});