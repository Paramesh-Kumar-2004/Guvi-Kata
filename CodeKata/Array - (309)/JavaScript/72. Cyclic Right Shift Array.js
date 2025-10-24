const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {
    let [N, K] = userInput[0].split(" ").map(Number);
    let arr = userInput[1].split(" ").map(Number);

    K = K % N;

    let result = arr.slice(-K).concat(arr.slice(0, N - K));

    console.log(result.join(" "));

});
