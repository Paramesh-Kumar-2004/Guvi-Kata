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
    let p = []
    for (let vp of v) {
        if (vp % 2 != 0) {
            p.push(vp)
        }
    }

    if (p.length <= 0) {
        console.log(-1)
    }
    else {
        console.log(p.join(" "))
    }

});

