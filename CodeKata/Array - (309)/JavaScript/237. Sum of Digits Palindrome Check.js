const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data.trim());
});

inp.on("close", () => {

    let v = userInput[0];
    // let vp = userInput[1].split(" ").map(Number);
    let count = 0
    for (let i of v) {
        count += parseInt(i)
    }

    console.log(String(count).split("").reverse().join("") == count ? "yes" : "no")

});