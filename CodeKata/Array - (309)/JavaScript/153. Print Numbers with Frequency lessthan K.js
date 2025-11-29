const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data.trim());
});

inp.on("close", () => {

    let [v1, v2] = userInput[0].split(" ").map(Number)
    let p = userInput[1].split(" ")
    let vp = new Set(p)
    let vv = []
    // console.log(Array.from(vp))

    for (let i of vp) {
        let pv = 0
        for (let j of p) {
            if (i == j) {
                pv += 1
                // console.log(i)
            }
        }

        if (pv <= v2 && !vv.includes(i)) {
            vv.push(i)
        }
    }

    console.log(vv.sort((a, b) => a - b).join(" "))

});
