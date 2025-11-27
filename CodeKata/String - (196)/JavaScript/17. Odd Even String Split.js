const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {

    let v = userInput[0]
    let p = ""
    let vp = ""

    for (let i = 0; i < v.length; i++) {
        if (i % 2 == 0) {
            p += v[i]
        }
        else {
            vp += v[i]
        }
    }
    console.log(p, vp)

});
