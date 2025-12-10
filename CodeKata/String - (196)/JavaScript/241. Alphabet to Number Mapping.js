const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data.trim());
});

inp.on("close", () => {

    let v = userInput[0];
    let n = v.length;
    let dp = new Array(n + 1).fill(0);

    dp[0] = 1;

    for (let i = 1; i <= n; i++) {
        if (v[i - 1] !== '0') dp[i] += dp[i - 1];
        if (i > 1) {
            let num = Number(v[i - 2] + v[i - 1]);
            if (num >= 10 && num <= 26) dp[i] += dp[i - 2];
        }
    }

    console.log(dp[n]);

});
