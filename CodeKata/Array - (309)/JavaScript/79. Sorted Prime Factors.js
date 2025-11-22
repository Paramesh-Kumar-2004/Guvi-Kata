const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {

    let v = +userInput[0];
    let vp = [];

    if (v % 2 === 0) {
        vp.push(2);
        while (v % 2 === 0) {
            v /= 2;
        }
    }

    for (let p = 3; p * p <= v; p += 2) {
        if (v % p === 0) {
            vp.push(p);
            while (v % p === 0) {
                v /= p;
            }
        }
    }

    if (v > 2) {
        vp.push(v);
    }

    console.log(vp.join(" "));

});