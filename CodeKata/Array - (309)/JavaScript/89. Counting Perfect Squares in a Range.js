const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {

    let [v, p] = userInput[0].split(" ").map(Number)

    let vp = 0;

    for (i = v; i <= p; i++) {
        let pv = Math.sqrt(i)
        if (pv === Math.floor(pv)) {
            vp += 1
        }
    }

    console.log(vp === 0 ? -1 : vp)

});