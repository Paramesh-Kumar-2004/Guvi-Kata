const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {

    const v = Number(userInput[0]);
    const p = userInput[1].split(" ").map(Number);

    let vp = new Set(p)

    // console.log([...vp].join(" "))
    console.log((Array.from(vp)).join(" "))

});
