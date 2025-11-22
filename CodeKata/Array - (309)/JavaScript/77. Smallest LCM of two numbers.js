const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {

    let [v, p] = userInput[0].trim().split(" ").map(Number);

    function gcd(v, p) {
        while (p !== 0) {
            let temp = p;
            p = v % p;
            v = temp;
        }
        return v;
    }

    function lcm(v, p) {
        return (v * p) / gcd(v, p);
    }

    console.log(lcm(v, p));

});