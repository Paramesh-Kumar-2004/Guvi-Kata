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

    if (v === 1) {
        console.log(1);
        return;
    }

    if (v === 2) {
        console.log(2);
        return;
    }

    let p = 1;
    let vp = 2;
    let vv = 0;

    for (let i = 3; i <= v; i++) {
        vv = p + vp;
        p = vp;
        vp = vv;
    }
    console.log(vv);

});