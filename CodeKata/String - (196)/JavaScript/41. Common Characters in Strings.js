const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {

    const [v, p] = userInput[0].split(" ")
    let vp = false

    for (let i of v) {
        if (p.includes(i)) {
            vp = true
            break
        }
    }
    console.log(vp ? "yes" : "no");

});