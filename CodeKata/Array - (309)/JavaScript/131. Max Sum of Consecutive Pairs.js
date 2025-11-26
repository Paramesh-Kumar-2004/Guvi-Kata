const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {

    const v = Number(userInput[0]);
    const p = userInput[1].split(" ").map(Number);

    p.sort((vp, pv) => vp - pv);

    let vv = [];
    let pp = 0, pv = v - 1;

    while (pp <= pv) {
        vv.push(p[pp++]);
        if (pp <= pv) vv.push(p[pv--]);
    }

    let vp = 0;

    for (let i = 0; i < v - 1; i++) {
        vp += Math.max(vv[i], vv[i + 1]);
    }

    console.log(vp);

});