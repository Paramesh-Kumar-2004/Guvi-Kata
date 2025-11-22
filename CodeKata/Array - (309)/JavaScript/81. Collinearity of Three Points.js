const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {

    let a = userInput[0].split(" ").map(Number);
    let b = userInput[1].split(" ").map(Number);
    let c = userInput[2].split(" ").map(Number);

    let v1 = a[0], v2 = b[0], v3 = c[0];
    let p1 = a[1], p2 = b[1], p3 = c[1];

    let vp = (p2 - p1) * (v3 - v1) == (p3 - p1) * (v2 - v1);
    console.log(vp ? "yes" : "no");

});
