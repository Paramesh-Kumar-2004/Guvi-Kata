const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data.trim());
});

inp.on("close", () => {

    let vp = userInput[0].split(" ");
    let pv = []
    let res = 0

    for (let i of vp) {
        pv.push(i.split("").sort().join(""))
    }
    let vv = [...new Set(pv)]

    for (let i of vv) {
        let count = 0
        for (let j of vp) {
            j = j.split("").sort().join("")
            if (i == j) {
                count += 1
            }
        }
        if (count >= 2) {
            res += 1
        }
    }
    console.log(res)

});