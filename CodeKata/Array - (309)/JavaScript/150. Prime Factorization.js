const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data.trim());
});

inp.on("close", () => {

    let N = Number(userInput[0]);
    let result = [];

    if (N % 2 === 0) {
        result.push(2);
        while (N % 2 === 0) N /= 2;
    }

    for (let i = 3; i * i <= N; i += 2) {
        if (N % i === 0) {
            result.push(i);
            while (N % i === 0) N /= i;
        }
    }

    if (N > 2) result.push(N);

    console.log(result.join(" "));
});
