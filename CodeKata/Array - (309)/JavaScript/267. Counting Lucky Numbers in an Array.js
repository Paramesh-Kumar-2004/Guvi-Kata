const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data.trim());
});

inp.on("close", () => {

    let v = Number(userInput[0]);
    let p = userInput[1].split(" ").map(Number);
    let vp = 0;

    for (let i = 0; i < p.length; i++) {
        let check = v * (i + 1);
        if (p.includes(check)) {
            vp++;
        }
    }

    console.log(vp);
});
