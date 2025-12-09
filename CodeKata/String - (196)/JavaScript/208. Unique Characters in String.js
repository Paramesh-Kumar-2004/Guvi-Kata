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
    let p = new Set()
    let vp = ""

    for (let i = 0; i < v.length; i++) {
        let vv = v[i]
        if (!p.has(vv)) {
            vp += vv
            p.add(vv)
        }
    }

    console.log(vp)

});
