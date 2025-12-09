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
    let p = userInput[1]
    let vp = 0

    for (let i in v) {
        if (v[i] == p) {
            // console.log(v[i] == p,i)
            vp = +i + 1
        }
    }

    console.log(vp == 0 ? -1 : vp)

});