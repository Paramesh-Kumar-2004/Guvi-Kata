const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {

    const [v, p] = userInput[0].split(" ").map(Number)
    let vp = 0

    for (let i = v; i <= p; i++) {
        if (i % 2 != 0) {
            vp += i
        }
    }

    console.log(vp)

});