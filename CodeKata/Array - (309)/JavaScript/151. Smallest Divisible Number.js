const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data.trim());
});

inp.on("close", () => {

    let v = userInput[0]
    let p = userInput[1].split(" ")
    // let vp = new Set(p)
    // console.log(Array.from(vp))

    for (let i = 1; i <= 100000; i++) {
        let vp = 0
        for (let j of p) {
            if (i % j == 0) {
                vp += 1
            }
        }
        if (vp == v) {
            console.log(i)
            break
        }
    }

});
