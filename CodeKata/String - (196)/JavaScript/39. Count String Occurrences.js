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
    let p = userInput[1]
    let vp = -1


    for (let i of v) {
        if (i == p) {
            vp += 1
        }
    }

    console.log(vp != -1 ? vp + 1 : vp)

});