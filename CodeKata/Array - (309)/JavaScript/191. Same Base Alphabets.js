const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data.trim());
});

inp.on("close", () => {

    let [v, p] = userInput[0].split(" ");
    let vp = [...new Set(v.split(""))].sort().join()
    let pv = [...new Set(p.split(""))].sort().join()

    console.log(vp == pv ? "true" : "false")

});
