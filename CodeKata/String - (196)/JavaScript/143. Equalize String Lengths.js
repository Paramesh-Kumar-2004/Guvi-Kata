const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data.trim());
});

inp.on("close", () => {

    let [vp, pv] = userInput[0].split(" ")
    let v = vp.length
    let p = pv.length

    let min = v < p ? v : p

    console.log(vp.slice(0, min) + pv.slice(0, min))

});
