const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data.trim());
});

inp.on("close", () => {

    let n = Number(userInput[0]);

    function factorial(n) {
        let res = 1;
        for (let i = 2; i <= n; i++) res *= i;
        return res;
    }

    function catalan(n) {
        return factorial(2 * n) / (factorial(n + 1) * factorial(n));
    }

    console.log(catalan(n));

});
