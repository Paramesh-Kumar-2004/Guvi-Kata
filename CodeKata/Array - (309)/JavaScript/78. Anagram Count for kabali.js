const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {

    let v = +userInput[0];
    let vp = "kabali".split("").sort().join("");
    let vv = 0;

    for (let i = 1; i <= v; i++) {
        let p = userInput[i];

        if (p.length === 6) {
            let ps = p.split("").sort().join("");

            if (ps === vp) {
                vv += 1;
            }
        }
    }

    console.log(vv);

});
