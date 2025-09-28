const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {

    let v = userInput[0].split(" ")
    let p = userInput[1].split(" ")
    let vp = v[1]
    let count = -1

    for (let i of p) {
        if (i == v[1]) {
            count += 1
        }
    }

    if (count < 0) {
        console.log(count)
    }

    else {
        console.log(count + 1)
    }

});