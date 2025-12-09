const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data.trim());
});

inp.on("close", () => {

    let v = userInput[0].split(" ")[0]
    let p = userInput[0].split(" ")[1]

    let vp = v.length
    let pv = p.length

    function g(a, b) {
        while (b !== 0) {
            let t = b
            b = a % b
            a = t
        }
        return a
    }

    let r = g(vp, pv)

    if (r === 1) {
        console.log("yes")
    } else {
        console.log("no")
    }

});