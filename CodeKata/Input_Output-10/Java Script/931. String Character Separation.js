const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});


const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {

    let v = userInput[0].split("")
    console.log(v)
    console.log(v.join(" "))

});