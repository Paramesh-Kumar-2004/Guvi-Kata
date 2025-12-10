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
    let hexChars = "0123456789abcdefABCDEF"
    let vp = true

    for (let i = 0; i < v.length; i++) {
        if (!hexChars.includes(v[i])) {
            vp = false
            break
        }
    }

    console.log(vp ? "yes" : "no")

});