const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data.trim());
});

inp.on("close", () => {

    let v = userInput[0];
    let vp = 1;
    let pv = 1;

    for (let i = 1; i < v.length; i++) {
        let vv = Number(v[i]);
        let pp = Number(v[i - 1]);

        if ((vv % 2) !== (pp % 2)) {
            pv++;
        } else {
            pv = 1;
        }

        if (pv > vp) {
            vp = pv;
        }
    }

    console.log(vp);

});