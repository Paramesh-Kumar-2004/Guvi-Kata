const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data.trim());
});

inp.on("close", () => {

    const s = userInput[0];

    const romanValues = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    for (let ch of s) {
        if (!romanValues[ch]) {
            console.log(-1);
            return;
        }
    }

    let result = 0;

    for (let i = 0; i < s.length; i++) {
        const cur = romanValues[s[i]];
        const next = romanValues[s[i + 1]];

        if (next && cur < next) {
            result += next - cur;
            i++;
        } else {
            result += cur;
        }
    }

    console.log(result);
});
