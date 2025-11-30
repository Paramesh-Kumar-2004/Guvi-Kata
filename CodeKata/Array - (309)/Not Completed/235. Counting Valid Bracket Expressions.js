const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data.trim());
});

inp.on("close", () => {

    let v = +(userInput[0]);

    if (v === 0) {
        console.log("1");
        return;
    }

    let result = 1;

    for (let i = 1; i <= v; i++) {
        result = result * (v + i) / i;
    }

    result = result / (v + 1);

    console.log(result.toString());

});