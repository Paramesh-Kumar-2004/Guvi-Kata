const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {

    let vp = userInput[1].split(" ").map(Number);
    let oddCount = 0;
    let evenCount = 0;

    // Count odd and even numbers
    for (let i = 0; i < vp.length; i++) {
        if (vp[i] % 2 == 0) evenCount++;
        else oddCount++;
    }

    let result = -1;

    // Mostly odd, 1 even
    if (evenCount === 1) {
        for (let i = 0; i < vp.length; i++) {
            if (vp[i] % 2 == 0) {
                result = vp[i];
                break;
            }
        }
    }
    // Mostly even, 1 odd
    else if (oddCount === 1) {
        for (let i = 0; i < vp.length; i++) {
            if (vp[i] % 2 != 0) {
                result = vp[i];
                break;
            }
        }
    }

    console.log(result);
});
