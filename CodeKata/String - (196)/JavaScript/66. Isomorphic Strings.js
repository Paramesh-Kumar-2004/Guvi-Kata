const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {

    let vp = userInput[0].split(" ")
    let v = vp[0].split("")
    let p = vp[1].split("")
    let vv = new Set(v)
    let pp = new Set(p)

    console.log(vv.size === pp.size ? "yes" : "no")

});
