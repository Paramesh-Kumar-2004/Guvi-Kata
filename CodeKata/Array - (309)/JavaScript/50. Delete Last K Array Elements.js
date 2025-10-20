const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {

    let v = userInput[0].split(" ");
    let p = userInput[1].split(" ");
    const vp = +v[0] - +v[1]
    let pv = []

    for (let i = 0; i < vp; i++) {
        pv.push(p[i])
    }
    console.log(pv.join(" "))

});
