const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data.trim());
});

inp.on("close", () => {

    let v = userInput[0]
    let vp = []

    for (let i of v) {
        if (i.toLowerCase() == i) {
            vp.push(i.toUpperCase())
        }
        else {
            vp.push(i.toLowerCase())
        }
    }

    console.log(vp.join(""))

});
