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
    let vp = ""

    for (let i = 0; i < v.length; i++) {
        let ch = v[i]
        if (ch >= 'a' && ch <= 'z') {
            vp += ch.toUpperCase()
        } else if (ch >= 'A' && ch <= 'Z') {
            vp += ch.toLowerCase()
        } else {
            vp += ch
        }
    }

    console.log(vp)

});
