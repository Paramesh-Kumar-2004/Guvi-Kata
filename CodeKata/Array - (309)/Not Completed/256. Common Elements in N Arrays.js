const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data.trim());
});

inp.on("close", () => {

    let [v, p] = userInput[0].split(" ").map(Number);

    let vp = new Set(userInput[1].split(" ").map(Number));

    for (let pv = 2; pv <= v; pv++) {
        let vv = userInput[pv].split(" ").map(Number);
        let pp = new Set(vv);

        vp = new Set([...vp].filter(x => pp.has(x)));

        if (vp.size === 0) break;
    }

    if (vp.size === 0) {
        console.log(-1);
    } else {
        console.log([...vp].join(" "));
    }

});