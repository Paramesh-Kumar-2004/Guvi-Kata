const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data.trim());
});

inp.on("close", () => {

    let v = userInput[0].split(" ").join("")
    let p = [...new Set(v)]
    let vp = []

    for (let i of p) {
        let count = 0
        for (let j of v) {
            if (i == j) {
                count += 1
            }
        }
        vp.push([i, count])
    }

    vp.sort((a, b) => a[1] - b[1])

    let pv = vp.filter((item) => item[1] == vp[0][1])
    let result = []

    for (let i of pv) {
        result.push(i[0])
    }

    console.log(result.join(""))

});