const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {

    let [v, p, vp] = userInput[0].split(" ")
    vp = Number(vp)
    let pv = 0

    for (let i = 0; i < v.length; i++) {
        if (v[i] !== p[i]) {
            pv++
        }
    }
    console.log(pv === vp ? "yes" : "no")

});