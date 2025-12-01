const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data.trim());
});

inp.on("close", () => {

    let v = Number(userInput[0]);
    let vp = userInput[1].split(" ").map(Number);
    let pv = [...new Set(vp)]
    let res = []

    for (let i of pv) {
        let count = 0
        for (let j of vp) {
            if (i == j) {
                count += 1
            }
        }
        if (count > 1) {
            res.push(i)
        }
    }

    if (res.length >= 1) {
        console.log(res.sort((a, b) => a - b).join(" "))
    }

    else {
        console.log("unique")
    }

});