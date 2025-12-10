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
    let arr = userInput[1].split(" ");
    let prefix = userInput[2];

    let count = 0;

    for (let i = 0; i < n; i++) {
        if (arr[i].startsWith(prefix)) {
            count++;
        }
    }

    console.log(count);

});
