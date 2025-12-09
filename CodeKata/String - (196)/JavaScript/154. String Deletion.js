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
    let p = userInput[1];

    if (!v.includes(p)) {
        console.log(v);
        return;
    }

    let vp = v.split(p).join('');
    let pv = vp.replace(/\s+/g, ' ').trim();

    console.log(pv);

});