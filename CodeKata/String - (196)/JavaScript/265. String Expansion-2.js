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
    let vp = "";
    let i = 0;

    while (i < v.length) {
        let ch = v[i];
        i++;
        let numStr = "";
        while (i < v.length && v[i] >= '0' && v[i] <= '9') {
            numStr += v[i];
            i++;
        }

        if (numStr === "") {
            vp += ch;
            continue;
        }

        let num = Number(numStr);
        if (num % 2 === 0) {
            vp += ch.repeat(num);
        } else {
            vp += ch + numStr;
        }
    }

    console.log(vp);

});
