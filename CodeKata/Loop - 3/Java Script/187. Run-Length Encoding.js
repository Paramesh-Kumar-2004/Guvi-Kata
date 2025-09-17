const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {

    let v = userInput[0].split("")

    if (!v) {
        console.log("");
    } else {
        let result = "";
        let count = 1;

        for (let i = 1; i < v.length; i++) {
            if (v[i] === v[i - 1]) {
                count++;
            } else {
                result += v[i - 1] + count;
                count = 1;
            }
        }
        result += v[v.length - 1] + count;

        console.log(result);
    }
});