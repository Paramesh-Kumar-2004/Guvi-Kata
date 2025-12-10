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
    let pv = {}

    for (let i = 0; i < v.length; i++) {
        let ch = v[i]
        pv[ch] = (pv[ch] || 0) + 1
    }

    let vp = Object.keys(pv)
    vp.sort((a, b) => {
        if (pv[b] !== pv[a]) return pv[b] - pv[a]
        return a.localeCompare(b)
    })

    let res = ""
    for (let i = 0; i < vp.length; i++) {
        res += vp[i].repeat(pv[vp[i]])
    }

    console.log(res)

});