const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {

    let v = +userInput[0];

    function isPrime(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;

        for (let i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
        }

        return true;
    }

    let pairs = [];

    for (let p = 2; p * p <= v; p++) {
        if (v % p === 0 && isPrime(p)) {
            let q = v / p;
            if (isPrime(q)) {
                if (p >= q) pairs.push([p, q]);
                else pairs.push([q, p]);
            }
        }
    }

    if (pairs.length === 0) {
        console.log(-1);
    } else {
        pairs.sort((a, b) => b[0] - a[0]);
        pairs.forEach(pair => console.log(pair[0] + " " + pair[1]));
    }

});