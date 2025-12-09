const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data.trim());
});

inp.on("close", () => {

    // let [v,p] = userInput[0].split(" ");
    let vp = userInput[0].split("").map(Number)
    let pv = vp.sort((a, b) => b - a)

    console.log(pv[0] == 0 ? 0 : pv.join(""))

});
