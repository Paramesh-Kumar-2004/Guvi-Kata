const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {

    let v = +userInput[0]
    let p = userInput[1].split(" ").map(Number)
    let vp1 = [];
    let vp2 = [];
    let vv = [];

    vp1[0] = p[0];
    for (let i = 1; i < v; i++) {
        vp1[i] = vp1[i - 1] + p[i];
    }

    vp2[v - 1] = p[v - 1];
    for (let i = v - 2; i >= 0; i--) {
        vp2[i] = vp2[i + 1] + p[i];
    }

    for (let i = 0; i < v; i++) {
        vv.push(vp1[i] + vp2[i]);
    }

    console.log(vv.join(" "));

});
