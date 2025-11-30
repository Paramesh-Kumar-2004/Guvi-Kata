const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data.trim());
});

inp.on("close", () => {

    let v = +userInput[0];
    let vp = userInput[1].split(" ").map(Number);

    let pv = true;
    let vv, pp;

    for (let i = 0; i < v - 2; i++) {

        let incDec = (vp[i] < vp[i + 1] && vp[i + 1] > vp[i + 2]);

        let decInc = (vp[i] > vp[i + 1] && vp[i + 1] < vp[i + 2]);

        if (!(incDec || decInc)) {
            pv = false;
            break;
        }
    }

    console.log(pv ? "yes" : "no");
});