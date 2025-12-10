const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data.trim());
});

inp.on("close", () => {

    let s = "WELCOMETOGUVICORPORATIONS";
    let sub = userInput[0];

    let mat = [];
    let k = 0;
    for (let i = 0; i < 5; i++) {
        mat[i] = [];
        for (let j = 0; j < 5; j++) {
            mat[i][j] = s[k++] || '';
        }
    }

    let found = false;
    let n = 5;
    let m = 5;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= m - sub.length; j++) {
            let match = true;
            for (let l = 0; l < sub.length; l++) {
                if (mat[i][j + l] !== sub[l]) {
                    match = false;
                    break;
                }
            }
            if (match) {
                console.log(i, j);
                console.log(i, j + sub.length - 1);
                found = true;
                break;
            }
        }
        if (found) break;
    }

    if (!found) console.log(0);

});