const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data.trim());
});

inp.on("close", () => {

    let N = parseInt(userInput[0]);

    if (N < 10) {
        console.log(N + 1);
        return;
    }

    let count = 10;
    let queue = [];

    for (let i = 1; i <= 9; i++) queue.push(i);

    while (queue.length > 0) {
        let num = queue.shift();

        if (num > N) continue;

        let last = num % 10;

        if (last > 0) {
            let next = num * 10 + (last - 1);
            if (next <= N) {
                count++;
                queue.push(next);
            }
        }

        if (last < 9) {
            let next = num * 10 + (last + 1);
            if (next <= N) {
                count++;
                queue.push(next);
            }
        }
    }

    console.log(count);
});