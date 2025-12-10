const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data.trim());
});

inp.on("close", () => {

    let v = userInput[0].split(" ")
    let vp = []

    for (let i = 0; i < v.length; i++) {
        vp.push(v[i].split("").reverse().join(""))
    }
    console.log(vp.join(" "))
});