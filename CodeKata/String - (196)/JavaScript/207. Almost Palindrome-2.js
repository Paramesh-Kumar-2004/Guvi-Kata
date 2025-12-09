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
    let i = 0
    let j = v.length - 1
    let vp = 0

    while (i < j) {
        if (v[i] !== v[j]) vp++
        if (vp > 1) break
        i++
        j--
    }

    console.log(vp <= 1 ? "yes" : "no")

});
