const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data.trim());
});

inp.on("close", () => {

    let v = Number(userInput[0]);
    let vp = userInput[1].split(" ").map(Number);
    let result = []

    for (let i = 0; i < v; i++) {
        if (i % 2 == 1 && vp[i] % 2 == 0) {
            result.push(vp[i])
        }
        else if (i % 2 == 0 && vp[i] % 2 == 1) {
            result.push(vp[i])
        }
    }

    console.log(result.length > 0 ? result.join(" ") : -1)

});