const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data.trim());
});

inp.on("close", () => {

    const v = +userInput[0]
    const p = userInput[1].split(" ").map(Number)
    const vp = {}

    let pv = new Set([...p])

    for (let i of Array.from(pv)) {
        let count = 0
        for (j of p) {
            if (i == j) {
                count += 1
            }
        }
        vp[i] = count
    }

    let sorted = Object.entries(vp)
        .sort((a, b) => {
            if (b[1] !== a[1]) return b[1] - a[1];
            return Number(b[0]) - Number(a[0]);
        });

    console.log(sorted.map(x => x[0]).join(" "));

});
