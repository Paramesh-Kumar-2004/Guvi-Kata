const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data.trim());
});

inp.on("close", () => {

    let v = +userInput[0]
    let vp = userInput[1].split(" ").map(Number)
    let pv = userInput[2].split(" ").map(Number)

    let vv = []

    for (let i = 0; i < v; i++) {
        vv.push([vp[i], pv[i]])
    }

    let sorted = vv.sort((a, b) => a[1] - b[1])

    let pp = []
    sorted.forEach((a, b) => {
        pp.push(a[0])
    })

    console.log(pp.join(" "))

});