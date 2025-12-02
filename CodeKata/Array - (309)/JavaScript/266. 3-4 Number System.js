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
    let i = 1;
    let len = 1;

    while (n > (1 << len)) {
        n -= (1 << len);
        len++;
    }

    let res = '';
    n--;
    for (let j = len - 1; j >= 0; j--) {
        if ((n & (1 << j)) === 0) res += '3';
        else res += '4';
    }

    console.log(res);
});