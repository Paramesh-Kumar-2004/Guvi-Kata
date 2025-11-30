const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data.trim());
});

inp.on("close", () => {

    let vp = userInput[0];

    console.log(vp.includes("GUVI") && vp.includes("GEEK") ? "yes" : "no")

});
