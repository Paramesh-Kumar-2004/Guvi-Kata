const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {
    let v = parseInt(userInput[0]);
    let p = userInput[1].split(" ").map(Number);

    if (v === 0) {
        console.log(-1);
        return;
    }

    let vp = 1;
    let pv = 1;

    for (let vv = 1; vv < v; vv++) {
        if (p[vv] > p[vv - 1]) {
            vp++;
            if (vp > pv) pv = vp;
        } else {
            vp = 1;
        }
    }

    if (pv === 1) {
        console.log(-1);
    } else {
        console.log(pv);
    }
});
