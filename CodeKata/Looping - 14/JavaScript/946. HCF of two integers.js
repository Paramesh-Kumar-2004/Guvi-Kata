function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

const readline = require("readline");
const inp = readline.createInterface({
    input: process.stdin
});

let userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {
    let [v, p] = userInput[0].split(" ").map(Number);
    console.log(gcd(v, p));
});