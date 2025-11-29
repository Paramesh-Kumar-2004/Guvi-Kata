const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {

    const v = Number(userInput[0].trim());

    const tokens = userInput.slice(1).join(" ").trim().split(/\s+/).filter(s => s.length);
    const p = tokens.map(Number).slice(0, v);

    if (v <= 1) {
        console.log(0);
        return;
    }

    p.sort((a, b) => a - b);

    let vv = [];
    let pp = 0, pv = v - 1;

    while (pp <= pv) {
        vv.push(p[pp++]);
        if (pp <= pv) vv.push(p[pv--]);
    }

    let vpSum = 0;

    for (let i = 0; i < v - 1; i++) {
        vpSum += Math.max(vv[i], vv[i + 1]);
    }

    console.log(vpSum);

});
