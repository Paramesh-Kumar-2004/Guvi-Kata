const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data.trim());
});

inp.on("close", () => {

    let [a, b] = userInput[0].split(" ").map(Number);

    function prime(n) {
        if (n < 2) return false;
        for (let j = 2; j * j <= n; j++) {
            if (n % j === 0) return false;
        }
        return true;
    }

    let c = 0;

    for (let i = a; i <= b; i++) {
        let bin = i.toString(2);
        let k = 0;

        for (let j = 0; j < bin.length; j++) {
            if (bin[j] === '1') k++;
        }

        if (prime(k)) c++;
    }

    console.log(c);
});
