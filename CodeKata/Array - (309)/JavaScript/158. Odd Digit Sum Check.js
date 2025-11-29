const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data.trim());
});

inp.on("close", () => {

    let v = userInput[0].split("").map(Number)
    let vp = 0

    for (i = 0; i < v.length; i++) {
        if (v[i] % 2 != 0) {
            vp += v[i]
        }
    }

    console.log(vp % 2 == 0 ? "E" : "O")


});
