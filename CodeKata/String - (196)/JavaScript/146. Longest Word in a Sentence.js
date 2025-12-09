const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data.trim());
});

inp.on("close", () => {

    let v = userInput[0].split(" ")
    let p = v[0].length
    let vp = ""

    for (let i of v) {
        if (i.length >= p) {
            p = i.length
            vp = i
        }
    }
    console.log(vp)

});
