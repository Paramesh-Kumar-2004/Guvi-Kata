const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data.trim());
});

inp.on("close", () => {

    const v = userInput[0].split(" ");
    console.log(v == "sunday" || v == "saturday" ? "yes" : "no")
});
