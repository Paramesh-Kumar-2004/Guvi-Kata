const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {

    let vp = userInput[0].split(" ")
    let v = vp[0]
    let p = vp[1]

    if (v.length !== p.length) {
        console.log("no");
    } else {
        let diff = 0;
        for (let i = 0; i < v.length; i++) {
            if (v[i] !== p[i]) {
                diff++;
            }
        }
        if (diff === 1) {
            console.log("yes");
        } else {
            console.log("no");
        }
    }

});