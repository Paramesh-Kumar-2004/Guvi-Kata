const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {

    let v = userInput[0]
    let vp = userInput[1].split(" ")

    const p = vp.filter(ele => Number(ele) < Number(v))
    let pv = p.sort()

    if (pv.length === 0) {
        console.log(-1)
    }
    else {
        let vv = []
        for (let i = pv.length - 1; i >= 0; i--) {
            vv.push(p[i])
        }
        console.log(vv.join(" "))
    }

});