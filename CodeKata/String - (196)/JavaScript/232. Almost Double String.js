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
    let n = v.length;
    let found = false;

    for (let i = 0; i < n; i++) {
        let vv = v.slice(0, i) + v.slice(i + 1);
        if (vv.length % 2 === 0) {
            let mid = vv.length / 2;
            let first = vv.slice(0, mid);
            let second = vv.slice(mid);
            if (first === second) {
                found = true;
                break;
            }
        }
    }

    console.log(found ? "YES" : "NO");

});