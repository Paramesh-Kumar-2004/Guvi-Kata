const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const input = [];

inp.on("line", (d) => input.push(d));

inp.on("close", () => {
    const [v, p] = input[0].split(" ").map(Number);

    let vp = 1;

    for (let i = 0; i < p; i++) {
        vp *= +(v - i);
    }

    console.log(vp.toString());
});
