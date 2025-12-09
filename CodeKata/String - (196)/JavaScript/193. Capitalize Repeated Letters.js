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
    let p = v.toLowerCase()

    let pv = {}
    for (let i = 0; i < p.length; i++) {
        let ch = p[i]
        if (ch >= 'a' && ch <= 'z') {
            pv[ch] = (pv[ch] || 0) + 1
        }
    }

    let res = ""
    for (let i = 0; i < v.length; i++) {
        let ch = v[i]
        let low = ch.toLowerCase()
        if (pv[low] > 1) {
            res += ch.toUpperCase()
        } else {
            res += ch
        }
    }

    console.log(res)

});
