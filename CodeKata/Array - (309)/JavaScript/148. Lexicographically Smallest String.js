const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {

    let v = +userInput[0]

    let small = userInput[1]

    for (let i = 2; i <= v; i++) {
        if (userInput[i] < small) {
            small = userInput[i]
        }
    }

    console.log(small);

});
