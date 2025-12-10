const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data.trim());
});

inp.on("close", () => {

    let s1 = userInput[0];
    let s2 = userInput[1];

    let index = s1.indexOf(s2);

    console.log(index);

});