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
    let vp = []

    for (let i of v) {
        if (i.length != 0) {
            vp.push(i)
        }
    }

    console.log(vp.join(" "))

});