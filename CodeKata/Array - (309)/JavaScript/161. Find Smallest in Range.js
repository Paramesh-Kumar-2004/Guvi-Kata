const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data.trim());
});

inp.on("close", () => {

    let [v, vp, pv] = userInput[0].split(" ").map(Number)
    let p = userInput[1].split(" ").map(Number)

    let vp_p = p.indexOf(vp)
    let pv_p = p.indexOf(pv)

    let pp = []

    // console.log(pv_p)

    for (let i = 0; i < v; i++) {
        if (p[i] >= vp && p[i] <= pv) {
            pp.push(p[i])
        }

    }

    console.log(pp.length <= 0 ? -1 : Math.min(...pp))

});