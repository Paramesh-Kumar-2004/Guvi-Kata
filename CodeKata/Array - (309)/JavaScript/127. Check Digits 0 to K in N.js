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
    let vp = true

    for (let i = 0; i <= p; i++) {
        if (!v.includes(i)) {
            vp = false
        }
    }

    console.log(vp ? "yes" : "no")

});