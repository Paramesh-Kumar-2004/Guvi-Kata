function gcd(x, y) {
    while (y !== 0) {
        let temp = y;
        y = x % y;
        x = temp;
    }
    return x;
}

function lcm(x, y) {
    return (x * y) / gcd(x, y);
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
    let n = parseInt(userInput[0].trim());
    let numbers = userInput[1].split(" ").map(Number);

    let result = numbers[0];
    for (let i = 1; i < n; i++) {
        result = lcm(result, numbers[i]);
    }

    console.log(result);
});
