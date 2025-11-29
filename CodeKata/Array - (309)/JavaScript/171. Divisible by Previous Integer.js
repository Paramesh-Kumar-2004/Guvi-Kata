const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data.trim());
});

inp.on("close", () => {

    let v = +userInput[0]
    let p = userInput[1].split(" ").map(Number)
    let vp = []

    for (let i = 1; i < v; i++) {
        if (p[i] % p[i - 1] == 0) {
            vp.push(p[i])
        }
    }

    console.log(vp.join(" "))

});
