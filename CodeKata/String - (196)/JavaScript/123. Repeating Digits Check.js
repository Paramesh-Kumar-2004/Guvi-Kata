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
    let p = [...new Set(v)]
    let result = false

    for (let i of p) {
        let count = 0

        for (let j of v) {
            if (i == j) {
                count += 1
            }
        }
        if (count > 1) {
            result = true
        }
    }

    console.log(result ? "yes" : "no")

});