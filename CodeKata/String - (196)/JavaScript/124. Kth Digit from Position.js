const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data.trim());
});

inp.on("close", () => {

    let [N, P, K] = userInput[0].split(/\s+/);
    P = Number(P);
    K = Number(K);

    let index = (P - 1) + K;

    if (index >= 0 && index < N.length) {
        console.log(N[index]);
    } else {
        console.log("Invalid position");
    }

});
