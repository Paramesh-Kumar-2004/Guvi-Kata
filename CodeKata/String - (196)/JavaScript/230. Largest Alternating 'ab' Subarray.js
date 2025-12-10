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
    let maxLen = 0;
    let curLen = 0;

    for (let i = 0; i < v.length; i++) {
        if (v[i] === 'a' || v[i] === 'b') {
            if (i === 0) {
                curLen = 1;
            } else if ((v[i] !== v[i - 1]) && (v[i - 1] === 'a' || v[i - 1] === 'b')) {
                curLen++;
            } else {
                curLen = 1;
            }
            if (curLen >= 2 && curLen > maxLen) maxLen = curLen;
        } else {
            curLen = 0;
        }
    }

    console.log(maxLen);

});