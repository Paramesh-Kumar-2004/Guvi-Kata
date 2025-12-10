const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data.trim());
});

inp.on("close", () => {

    let [s, k] = userInput[0].split(" ");
    k = Number(k);

    let vp = [];

    for (let i = 0; i <= s.length - k; i++) {
        vp.push(s.slice(i, i + k));
    }

    console.log(vp.join(' '));

});