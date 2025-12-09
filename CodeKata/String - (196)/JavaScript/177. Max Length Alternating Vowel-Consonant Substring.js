const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (d) => {
    userInput.push(d.trim());
});

inp.on("close", () => {

    let v = userInput[0]
    let p = "aeiouAEIOU"
    let vp = 0
    let pv = 0

    for (let i = 0; i < v.length; i++) {
        let vv = p.includes(v[i])
        if (i == 0) {
            pv = 1
        } else {
            let pp = p.includes(v[i - 1])
            if (vv != pp) {
                pv++
            } else {
                pv = 1
            }
        }
        if (pv > vp) {
            vp = pv
        }
    }

    if (vp <= 1) {
        console.log(0)
    } else {
        console.log(vp)
    }

});
