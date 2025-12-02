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
    let vv = []

    for (let i = 0; i < v; i++) {
        let pv = 1
        for (let j = 0; j < v; j++) {
            if (i == j) {
                continue
            }
            else {
                pv *= vp[j]
            }
        }
        vv.push(pv)
    }

    console.log(vv.join(" "))

});