const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {

    let v = parseInt(userInput[0]);
    let vp = userInput[1].split(" ").map(Number);

    let FS = Infinity;
    let SM = Infinity;

    for (let i of vp) {
        if (i < FS) {
            SM = FS;
            FS = i;
        } else if (i > FS && i < SM) {
            SM = i;
        }
    }

    if (SM === Infinity) {
        console.log(-1);
    } else {
        console.log(SM);
    }
});
