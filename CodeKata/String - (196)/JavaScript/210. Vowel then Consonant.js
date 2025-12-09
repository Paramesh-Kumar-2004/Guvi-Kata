const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data.trim());
});

inp.on("close", () => {

    let v = userInput[0].split("")
    let p = "aeiou"
    let vp = []
    let pv = []

    for (let i of v) {
        if (p.includes(i)) {
            vp.push(i)
        }
        else {
            pv.push(i)
        }
    }

    console.log(vp.concat(pv).join(""))

});
