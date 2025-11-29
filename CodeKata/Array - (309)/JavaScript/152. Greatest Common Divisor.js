const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data.trim());
});

inp.on("close", () => {

    let v = Number(userInput[0]);
    let p = userInput[1].split(" ").map(Number);

    function gcd(a, b) {
        while (b !== 0) {
            let t = b;
            b = a % b;
            a = t;
        }
        return a;
    }

    let g = p[0];
    for (let i = 1; i < v; i++) {
        g = gcd(g, p[i]);
    }

    console.log(g);
});
